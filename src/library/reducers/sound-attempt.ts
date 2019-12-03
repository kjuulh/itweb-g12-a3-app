import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoundState } from './round';
import { ActiveFieldState } from './activeField';
import { NBackState } from './nback';
import { CounterState } from './counter';
import { ActiveSoundState } from './activeSound';

export interface SoundAttempt {
  round: number;
  nback: number;
  success: boolean;
  attempted: boolean;
}

export interface SoundAttemptState {
  attempts: SoundAttempt[];
}

const initialState: SoundAttemptState = {
  attempts: [],
};

const soundAttemptSlice = createSlice({
  name: 'sound-attempt',
  initialState,
  reducers: {
    add: (
      state: SoundAttemptState,
      action: PayloadAction<{ round: number; nback: number; success: boolean }>,
    ) => {
      const { round, nback, success } = action.payload;

      const stateField = state.attempts.find(
        (attempt) => attempt.round == round,
      );

      if (stateField == null || stateField.attempted == false) {
        return {
          attempts: [
            ...state.attempts,
            {
              round,
              nback,
              success,
              attempted: true,
            },
          ],
        };
      }
    },
    reset: (state: SoundAttemptState) => initialState,
  },
});

const { actions, reducer } = soundAttemptSlice;

export const { reset } = actions;
export default reducer;

export const attempt = () => {
  return async (dispatch: any, getState: any) => {
    const state: {
      Round: RoundState;
      SoundAttempt: SoundAttemptState;
      ActiveSound: ActiveSoundState;
      NBack: NBackState;
      Counter: CounterState;
    } = getState();

    const sound = state.ActiveSound.sound;
    const round = state.Counter.count;
    const nback = state.NBack.n;
    const nbackRound = state.Round.rounds.find((r) => r.round == round - nback);

    if (nbackRound) {
      dispatch(
        actions.add({
          round,
          nback,
          success: nbackRound.sound == sound,
        }),
      );
    }
  };
};
