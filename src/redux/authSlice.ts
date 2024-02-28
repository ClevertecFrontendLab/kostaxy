import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  email: string | null;
  token: string | null;
  error: string | null;
  password: string | null;
  resetPasswordError: boolean;
  confirmPassword: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  email: null,
  token: null,
  error: null,
  password: null,
  resetPasswordError: false,
  confirmPassword: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.token = action.payload;
      state.error = null;
    },
    loginFailure: (state) => {
      state.isAuthenticated = false;
      state.token = null;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.error = null;
      state.email = null;
    },
    resetPassword: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
      state.resetPasswordError = false;
    },
    registerUser: (state, action: PayloadAction<any>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    resetPasswordFailure: (state) => {
      state.resetPasswordError = true;
    },
    newPassword: (state, action: PayloadAction<any>) => {
      state.password = action.payload.password;
      state.confirmPassword = action.payload.confirmPassword;
    }
  },
});

export const { loginSuccess, loginFailure, logout, resetPassword, registerUser, resetPasswordFailure, newPassword } = authSlice.actions;
export default authSlice.reducer;