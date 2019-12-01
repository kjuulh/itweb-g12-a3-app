import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum GameRunningState {
  Running = 'running',
  Finished = 'finished',
}

export interface GameSettingsState {
  state: GameRunningState;
  widthHeight: number;
}

const initialState: GameSettingsState = {
  state: GameRunningState.Finished,
  widthHeight: 3,
};

const gameSettingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    start: (
      state: GameSettingsState,
      action: PayloadAction<{ widthHeight: number }>,
    ) => ({
      widthHeight: action.payload.widthHeight,
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
