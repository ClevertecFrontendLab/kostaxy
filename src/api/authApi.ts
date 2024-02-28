import { redirectTo } from '../routes/routes';
import { hideLoader, showLoader } from '@redux/loaderSlice';
import axios from 'axios';
import { loginSuccess, loginFailure, resetPassword, registerUser, resetPasswordFailure, newPassword, logout } from './../redux/authSlice';
import { AppDispatch } from './../redux/configure-store';
import PATHS from '../routes/paths';

const api = axios.create({
  baseURL: 'https://marathon-api.clevertec.ru',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = (email: string, password: string, isRememberUser: boolean) => async (dispatch: AppDispatch) => {
  try {
    dispatch(showLoader())
    const token = localStorage.getItem("token") as string;

    const response = await axios({
      method: 'post',
      url: '/auth/login',
      data: { email, password },
      headers: token ? { Bearer: `token=${token}` } : {}
    });
    dispatch(loginSuccess(response.data.accessToken));
    if (isRememberUser) {
      localStorage.setItem("token", response.data.accessToken);
    }
    redirectTo(PATHS.main)
  } catch (error: any) {
    dispatch(loginFailure());
    redirectTo(PATHS.authError);
    dispatch(hideLoader())
  }
};

export const registration = (email: string, password: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(showLoader())
    dispatch(registerUser({ email: email, password: password }))
    await api.post('/auth/registration', { email, password });
    redirectTo(PATHS.registrationSuccess)
  } catch (error: any) {
    if (error.response.status === 409) {
      redirectTo(PATHS.registrationErrorEmail)
    } else {
      redirectTo(PATHS.registrationError)
    }
  } finally {
    dispatch(hideLoader())
  }
};

export const changePassword = (email: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(showLoader())
    dispatch(resetPassword(email));
    await api.post('/auth/check-email', { email });
    redirectTo(PATHS.resetPassword);
  } catch (error: any) {
    if (error.response.status === 404 && error.response.data.message === 'Email не найден') {
      redirectTo(PATHS.emailError)
    } else {
      redirectTo(PATHS.serverError)
    }
  } finally {
    dispatch(hideLoader())
  }
};

export const changePasswordCodeConfirm = (email: string, code: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(showLoader())
    await api.post('/auth/confirm-email', { email, code });
    redirectTo(PATHS.newPasswordPage)
  } catch (error: any) {
    dispatch(resetPasswordFailure())
  } finally {
    dispatch(hideLoader())
  }
};

export const setNewPassword = (password: string, confirmPassword: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(showLoader())
    dispatch(newPassword({ password: password, passwordConfirm: confirmPassword }))
    const token = localStorage.getItem("token") as string;

    await axios({
      method: 'post',
      url: '/auth/change-password',
      data: { password, confirmPassword },
      headers: { Cookie: `token=${token}` }
    });

    localStorage.removeItem("token");
    dispatch(logout());
    redirectTo(PATHS.changePasswordSuccess)
  } catch (error: any) {
    redirectTo(PATHS.changePasswordErrorPage)
  } finally {
    dispatch(hideLoader())
  }
};

