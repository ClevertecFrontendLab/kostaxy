import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import loaderSlice from './loaderSlice';
import authSlice from './authSlice';
import feedbacksSlice from './feedbacksSlice';
import modalSlice from './modalSlice';

const {
  createReduxHistory,
  routerMiddleware,
  routerReducer
} = createReduxHistoryContext({ history: createBrowserHistory() });

export const store = configureStore({
  reducer: combineReducers({
    loader: loaderSlice,
    auth: authSlice,
    router: routerReducer,
    feedbacks: feedbacksSlice,
    modal: modalSlice
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware),
});



export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
