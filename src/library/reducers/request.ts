import { createSlice, PayloadAction, createReducer } from '@reduxjs/toolkit';
import * as Register from './register';

export interface RequestState {
  requesting: boolean;
  finished: boolean;
  success: boolean;
  failed: boolean;
  message: string;
  redirect: string;
}

const initialState: RequestState = {
  requesting: false,
  finished: false,
  success: false,
  failed: false,
  message: '',
  redirect: '',
};

const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    requested: (
      state: RequestState,
      action: PayloadAction<{ redirect: string }>,
    ) => ({
      ...state,
      requesting: true,
      finished: false,
      success: false,
      failed: false,
      message: '',
      redirect: action.payload.redirect,
    }),
    finished: (
      state: RequestState,
      action: PayloadAction<{ message: string }>,
    ) => ({
      ...state,
      requesting: false,
      success: true,
      finished: true,
      message: action.payload.message,
    }),
    error: (state: RequestState, action: PayloadAction<{ error: string }>) => ({
      ...state,
      requesting: false,
      finished: true,
      success: false,
      failed: true,
      message: action.payload.error,
    }),
    reset: (state: RequestState) => ({
      requesting: false,
      finished: false,
      success: false,
      failed: false,
      message: '',
      redirect: '',
    }),
  },
});

const { reducer, actions } = requestSlice;

export const { requested, finished, error, reset } = actions;
export default reducer;
