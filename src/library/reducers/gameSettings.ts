import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { reset as timerReset, increment } from './counter';
import { add, addRound } from './round';
import uuid from 'uuid';

export enum GameRunningState {
  Running = 'running',
  Finished = 'finished',
}

export interface GameSettingsState {
  session: string;
  state: GameRunningState;
  widthHeight: number;
  timerDuration: number;
}

const initialState: GameSettingsState = {
  session: '',
  state: GameRunningState.Finished,
  widthHeight: 3,
  timerDuration: 5,
};

const gameSettingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    start: (
      state: GameSettingsState,
      action: PayloadAction<{
        widthHeight: number;
        timerDuration: number;
        session: string;
      }>,
    ) => ({
      widthHeight: action.payload.widthHeight,
      timerDuration: action.payload.timerDuration,
      state: GameRunningState.Running,
      session: action.payload.session,
    }),
    finished: (state: GameSettingsState) => ({
      ...initialState,
    }),
  },
});

const { actions, reducer } = gameSettingsSlice;

export const { start, finished } = actions;
export default reducer;

export const beginGame = (size: number, timerDuration: number) => {
  return async (dispatch: any) => {
    const session = uuid.v4();
    dispatch(start({ widthHeight: size, timerDuration, session }));
    dispatch(timerReset());
    setInterval(() => {
      dispatch(increment());
      dispatch(addRound(size));
    }, timerDuration * 1000);
  };
};
