import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthService } from '../../services/auth.service';
import * as Request from './request';

export interface RegisterState {
  registering: boolean;
  registered: boolean;
  error: string;
}

const initialState = {
  registering: false,
  registered: false,
  error: '',
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    requested: (state) => ({ ...state, registering: true, error: '' }),
    success: (state) => ({
      ...state,
      registered: true,
      registering: false,
      error: '',
    }),
    failed: (state, action: PayloadAction<string>) => ({
      ...state,
      registering: false,
      registered: false,
      error: action.payload,
    }),
    reset: (state) => ({
      registered: false,
      registering: false,
      error: '',
    }),
  },
});

const { actions, reducer } = registerSlice;

export const { requested, success, failed, reset } = actions;
export default reducer;

export const registerUser = (
  username: string,
  email: string,
  password: string,
) => async (dispatch: any) => {
  dispatch(Request.requested({ redirect: '/login' }));
  dispatch(requested());

  try {
    const user = await AuthService.registerUser({
      username,
      email,
      password,
    });
    if (user.id) {
      dispatch(
        Request.finished({ message: 'User was successfully registered' }),
      );
      dispatch(success());
    } else {
      dispatch(Request.error({ error: 'Try again later' }));
      dispatch(failed("Something wen't wrong"));
    }
  } catch (error) {
    dispatch(Request.error({ error: error.toString() }));
    dispatch(failed(error.toString()));
  }
};
