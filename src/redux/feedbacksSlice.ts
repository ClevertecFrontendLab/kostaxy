import { PayloadAction, createSlice } from '@reduxjs/toolkit';


interface FeedbacksState {
  posts: FeedbackPost[];
}


const initialState: FeedbacksState = {
  posts: []
};


const feedbacksSlice = createSlice({
  name: 'feedbacks',
  initialState,
  reducers: {
    setFeedbacks: (state, action: PayloadAction<FeedbackPost[]>) => {
      state.posts = action.payload
    },
  },
});

export interface FeedbackPost {
  "id": string,
  "fullName": string | null,
  "imageSrc": string | null,
  "message": string | null,
  "rating": number | null,
  "createdAt": string | null
}
export const { setFeedbacks } = feedbacksSlice.actions;
export default feedbacksSlice.reducer;