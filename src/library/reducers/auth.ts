import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as Request from './request';

export interface AuthState {
  token: string;
  id: string;
  loggedIn: boolean;
}

const initialState: AuthState = {
  token: '',
  id: '',
  loggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticated: (
      state: AuthState,
      action: PayloadAction<{ token: string; id: string }>,
    ) => ({
      ...action.payload,
      loggedIn: true,
    }),
    cleared: (state: AuthState) => ({ ...initialState }),
  },
});

const { actions, reducer } = authSlice;

export const { authenticated, cleared } = actions;

export const logout = () => {
  return async (dispatch: any) => {
    dispatch(cleared());
    dispatch(Request.finished({ message: "You've logged out" }));
  };
};

export default reducer;
