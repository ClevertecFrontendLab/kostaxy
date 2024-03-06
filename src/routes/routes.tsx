import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Routes as ReactRouterDomRoutes, Route, useNavigate } from "react-router-dom";
import PATHS from "./paths";
import { AppDispatch, RootState, history } from "@redux/configure-store";
import { loginUseGoogleToken } from "../api/authApi";
import { locationSelect } from "@redux/selectors";
import { ChangePasswordErrorPage } from "@pages/changePasswordErrorPage/changePasswordErrorPage";
import { MainPage } from "@pages/main-page/main-page";
import { AuthPage } from "@pages/authPage/authPage";
import { AuthRegistrationPage } from "@pages/authRegistrationPage/authRegistrationPage";
import { AuthErrorPage } from "@pages/authErrorPage/authErrorPage";
import { RegistrationErrorEmailPage } from "@pages/registrationErrorEmailPage/registrationErrorEmailPage";
import { RegistrationErrorPage } from "@pages/registrationErrorPage/registrationErrorPage";
import { RegistrationSuccessPage } from "@pages/registrationSuccessPage/registrationSuccessPage";
import { ServerErrorPage } from "@pages/serverErrorPage/serverErrorPage";
import { EmailErrorPage } from "@pages/emailErrorPage/emailErrorPage";
import { ResetPasswordPage } from "@pages/resetPasswordPage/resetPasswordPage";
import { ChangePasswordSuccessPage } from "@pages/changePasswordSuccessPage/changePasswordSuccessPage";
import { NewPasswordPage } from "@pages/newPasswordPage/newPasswordPage";
import { FeedbacksPage } from "@pages/feedbacksPage/feedbacksPage";

let programmaticallyNavigatedToResult = false;

export const redirectTo = (path: string) => {
  programmaticallyNavigatedToResult = true;
  history.push(path);
};




export const Routes = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const location = useSelector(locationSelect);

  const navigate = useNavigate();

  const params = new URLSearchParams(location?.search);
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
    if (location?.pathname === '/') {
      if (isAuthenticated || localStorage.getItem("token")) {
        navigate(PATHS.main);
      } else {
        navigate(PATHS.auth);
      }
    }

    if (location?.pathname.startsWith('/result') && !programmaticallyNavigatedToResult) {
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

