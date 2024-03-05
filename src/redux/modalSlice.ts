import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isShowFeedbackForm: false,
    isShowFeedbackSuccess: false,
    isShowFeedbackLoadFailed: false,
    isShowFeedbackAddFailed: false,
  },
  reducers: {
    showFeedbackFormModal: (state) => {
      state.isShowFeedbackForm = true;
    },
    hideFeedbackFormModal: (state) => {
      state.isShowFeedbackForm = false;
    },
    showFeedbackSuccessModal: (state) => {
      state.isShowFeedbackSuccess = true;
    },
    hideFeedbackSuccessModal: (state) => {
      state.isShowFeedbackSuccess = false;
    },
    showFeedbackFailedAddModal: (state) => {
      state.isShowFeedbackAddFailed = true;
    },
    hideFeedbackFailedAddModal: (state) => {
      state.isShowFeedbackAddFailed = false;
    },
    showFeedbackLoadErrorModal: (state) => {
      state.isShowFeedbackLoadFailed = true;
    },
    hideFeedbackLoadErrorModal: (state) => {
      state.isShowFeedbackLoadFailed = false;
    },
  },
});

export const {
  showFeedbackFailedAddModal,
  showFeedbackLoadErrorModal,
  showFeedbackFormModal,
  showFeedbackSuccessModal,
  hideFeedbackFailedAddModal,
  hideFeedbackFormModal,
  hideFeedbackLoadErrorModal,
  hideFeedbackSuccessModal
} = modalSlice.actions

export default modalSlice.reducer
