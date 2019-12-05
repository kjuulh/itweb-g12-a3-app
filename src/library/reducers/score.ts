import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SocketService } from '../../services/socket.service';
import { AuthState } from './auth';
import { GameSettingsState } from './gameSettings';

export interface ScoreState {
  score: number;
}

const initialState: ScoreState = {
  score: 0,
};

const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    add: (state: ScoreState, action: PayloadAction<number>) => ({
      score: action.payload,
    }),
    reset: (state: ScoreState) => initialState,
  },
});

const { actions, reducer } = scoreSlice;
export const { reset } = actions;
export default reducer;

export const add = (payload: number) => {
  return async (dispatch: any, getState: any) => {
    const state: {
      Auth: AuthState;
      Settings: GameSettingsState;
    } = getState();

    dispatch(actions.add(payload));

    if ((state.Auth.loggedIn && state.Settings.session, state.Auth.id)) {
      console.log('In here');
      SocketService.addGame({
        jwt: state.Auth.token,
        score: payload,
        session: state.Settings.session,
      });
    }
  };
};
