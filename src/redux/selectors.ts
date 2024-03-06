import { RootState } from "./configure-store";

export const locationSelect = (state: RootState) => state.router.location

export const isShowFeedbackFormSelect = (state: RootState) => state.modal.isShowFeedbackForm;
export const isShowFeedbackSuccessSelect = (state: RootState) => state.modal.isShowFeedbackSuccess;
export const isShowFeedbackLoadFailedSelect = (state: RootState) => state.modal.isShowFeedbackLoadFailed;
export const isShowFeedbackAddFailedSelect = (state: RootState) => state.modal.isShowFeedbackAddFailed;

export const isLoadingSelect = (state: RootState) => state.loader.isLoading
export const passwordSelect = (state: RootState) => state.auth.password
export const passwordConfirmSelect = (state: RootState) => state.auth.passwordConfirm
export const emailSelect = (state: RootState) => state.auth.email
export const resetPasswordErrorSelect = (state: RootState) => state.auth.resetPasswordError

export const postsSelect = (state: RootState) => state.feedbacks.posts