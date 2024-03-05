import { RootState } from "./configure-store";

export const isShowFeedbackFormSelect = (state: RootState) => state.modal.isShowFeedbackForm;
export const isShowFeedbackSuccessSelect = (state: RootState) => state.modal.isShowFeedbackSuccess;
export const isShowFeedbackLoadFailedSelect = (state: RootState) => state.modal.isShowFeedbackLoadFailed;
export const isShowFeedbackAddFailedSelect = (state: RootState) => state.modal.isShowFeedbackAddFailed;