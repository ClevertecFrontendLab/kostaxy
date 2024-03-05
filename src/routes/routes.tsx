import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Routes as ReactRouterDomRoutes, Route, useNavigate } from "react-router-dom";
import AuthPage from "@pages/authPage";
import { MainPage } from "@pages/main-page";
import AuthErrorPage from "@pages/authErrorPage";
import RegistrationErrorEmailPage from "@pages/registrationErrorEmailPage";
import ServerErrorPage from "@pages/serverErrorPage";
import EmailErrorPage from "@pages/emailErrorPage";
import ResetPasswordPage from "@pages/resetPasswordPage";

import PATHS from "./paths";
import { AppDispatch, RootState, history } from "@redux/configure-store";
import RegistrationErrorPage from "@pages/registrationErrorPage";
import RegistrationSuccessPage from "@pages/registrationSuccessPage";
import ChangePasswordErrorPage from "@pages/changePasswordErrorPage";
import ChangePasswordSuccessPage from "@pages/changePasswordSuccessPage";
import AuthRegistrationPage from "@pages/authRegistrationPage";
import NewPasswordPage from "@pages/newPasswordPage";
import FeedbacksPage from "@pages/feedbacksPage";
import { loginSuccess } from "@redux/authSlice";
import { loginUseGoogleToken } from "../api/authApi";

let programmaticallyNavigatedToResult = false;

export const redirectTo = (path: string) => {
  programmaticallyNavigatedToResult = true;
  history.push(path);
};




const Routes = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const location = useSelector((state: any) => state.router.location);
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const token = params.get('accessToken');
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (token) {
      dispatch(loginUseGoogleToken(token));
    }
  }, [])

  useEffect(() => {

    if (isAuthenticated && localStorage.getItem("token")) {
      navigate(PATHS.main);
    } else {
      navigate(PATHS.auth);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (location.pathname === '/') {
      if (isAuthenticated || localStorage.getItem("token")) {
        navigate(PATHS.main);
      } else {
        navigate(PATHS.auth);
      }
    }

    if (location.pathname.startsWith('/result') && !programmaticallyNavigatedToResult) {
      history.push(PATHS.auth);
    }

    programmaticallyNavigatedToResult = false;

  }, [location, isAuthenticated]);


  return (
    <ReactRouterDomRoutes>
      <Route path="/" element={<Link to={PATHS.main} />} />
      <Route path={PATHS.main} element={<MainPage />} />
      <Route path={PATHS.auth} element={<AuthPage />} />
      <Route path={PATHS.authRegistration} element={<AuthRegistrationPage />} />
      <Route path={PATHS.authError} element={<AuthErrorPage />} />
      <Route path={PATHS.registrationErrorEmail} element={<RegistrationErrorEmailPage />} />
      <Route path={PATHS.registrationError} element={<RegistrationErrorPage />} />
      <Route path={PATHS.registrationSuccess} element={<RegistrationSuccessPage />} />
      <Route path={PATHS.serverError} element={<ServerErrorPage />} />
      <Route path={PATHS.emailError} element={<EmailErrorPage />} />
      <Route path={PATHS.resetPassword} element={<ResetPasswordPage />} />
      <Route path={PATHS.changePasswordErrorPage} element={<ChangePasswordErrorPage />} />
      <Route path={PATHS.changePasswordSuccess} element={<ChangePasswordSuccessPage />} />
      <Route path={PATHS.newPasswordPage} element={<NewPasswordPage />} />
      <Route path={PATHS.feedbacks} element={<FeedbacksPage />} />
    </ReactRouterDomRoutes>
  )
}

export default Routes
