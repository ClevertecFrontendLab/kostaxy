import { showFeedbackFailedAddModal, showFeedbackLoadErrorModal, showFeedbackSuccessModal } from '@redux/modalSlice';

import { hideLoader, showLoader } from '@redux/loaderSlice';
import axios from 'axios';
import { resetAuth } from './../redux/authSlice';
import { AppDispatch } from './../redux/configure-store';
import { setFeedbacks } from '@redux/feedbacksSlice';

const api = axios.create({
  baseURL: 'https://marathon-api.clevertec.ru',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getFeedbacksPosts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(showLoader())
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error('No token found in headers');
    }

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const response = await api.get('/feedback')
    dispatch(setFeedbacks(response.data))
  } catch (error: any) {
    if (error.response.status === 403) {
      dispatch(resetAuth());
    } else {
      dispatch(showFeedbackLoadErrorModal());
    }

  } finally {
    dispatch(hideLoader())
  }
};


export const createFeedbackPost = (rating: number, message: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(showLoader())

    await api.post('/feedback', { rating, message });
    dispatch(showFeedbackSuccessModal())
  } catch (error: any) {
    dispatch(showFeedbackFailedAddModal())
  } finally {
    dispatch(hideLoader())
  }
};



