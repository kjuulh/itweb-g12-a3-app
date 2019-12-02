import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { reset as timerReset, increment } from './counter';
import { add, addRound } from './round';

export enum GameRunningState {
  Running = 'running',
  Finished = 'finished',
}

export interface GameSettingsState {
  state: GameRunningState;
  widthHeight: number;
  timerDuration: number;
}

const initialState: GameSettingsState = {
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
      action: PayloadAction<{ widthHeight: number; timerDuration: number }>,
    ) => ({
      widthHeight: action.payload.widthHeight,
      timerDuration: action.payload.timerDuration,
      state: GameRunningState.Running,
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
    dispatch(start({ widthHeight: size, timerDuration }));
    dispatch(timerReset());
    setInterval(() => {
      dispatch(increment());
      dispatch(addRound(size));
    }, timerDuration * 1000);
  };
};
