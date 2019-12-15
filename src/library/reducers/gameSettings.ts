import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { reset as timerReset, increment } from './counter';
import { add, addRound } from './round';
import uuid from 'uuid';
import * as ActiveField from './activeField';
import * as ActiveSound from './activeSound';
import * as Counter from './counter';
import * as FieldAttempt from './field-attempt';
import * as NBack from './nback';
import * as Round from './round';
import * as Score from './score';
import * as SoundAttempt from './sound-attempt';

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

let runTime: any;

export const { start, finished } = actions;
export default reducer;

export const beginGame = (size: number, timerDuration: number) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();

    const session = uuid.v4();
    dispatch(start({ widthHeight: size, timerDuration, session }));
    dispatch(timerReset());
    if (typeof runTime !== 'undefined') {
      clearInterval(runTime);
    }
    runTime = setInterval(() => {
      dispatch(increment());
      dispatch(addRound(size));
    }, timerDuration * 1000);
  };
};

export const resetGame = () => {
  return async (dispatch: any) => {
    dispatch(finished());
    dispatch(ActiveField.reset());
    dispatch(ActiveSound.reset());
    dispatch(Counter.reset());
    dispatch(FieldAttempt.reset());
    dispatch(NBack.reset());
    dispatch(Round.reset());
    dispatch(Score.reset());
    dispatch(SoundAttempt.reset());
  };
};
