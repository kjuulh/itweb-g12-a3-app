import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as Request from './request';
import * as Auth from './auth';
import { AuthService } from '../../services/auth.service';

export interface LoginState {
  loggingIn: boolean;
  loggedIn: boolean;
  error: string;
}

const initialState: LoginState = {
  loggingIn: false,
  loggedIn: false,
  error: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    requested: (state) => ({
      loggingIn: true,
      ...initialState,
    }),
    success: (state) => ({
      loggedIn: true,
      ...initialState,
    }),
    failure: (state, action: PayloadAction<{ error: string }>) => ({
      error: action.payload.error,
      ...initialState,
    }),
    reset: (state) => ({
      ...initialState,
    }),
  },
});

const { actions, reducer } = loginSlice;
export const { requested, success, failure, reset } = actions;
export default reducer;

export const login = (username: string, password: string) => {
  return async (dispatch: any) => {
    dispatch(Request.requested({ redirect: '/home' }));
    dispatch(requested());

    try {
      const user = await AuthService.login({
        username,
        password,
      });
      dispatch(Auth.authenticated(user));
      dispatch(Request.finished({ message: 'You were logged in' }));
      dispatch(success());
    } catch (error) {
      dispatch(Request.error({ error: error.toString() }));
      dispatch(failure(error.toString()));
    }
  };
};
