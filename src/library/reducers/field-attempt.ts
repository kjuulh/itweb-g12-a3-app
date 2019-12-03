import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoundState } from './round';
import { ActiveFieldState } from './activeField';
import { NBackState } from './nback';
import { CounterState } from './counter';

export interface FieldAttempt {
  round: number;
  nback: number;
  success: boolean;
  attempted: boolean;
}

export interface FieldAttemptState {
  attempts: FieldAttempt[];
}

const initialState: FieldAttemptState = {
  attempts: [],
};

const fieldAttemptSlice = createSlice({
  name: 'field-attempt',
  initialState,
  reducers: {
    add: (
      state: FieldAttemptState,
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
    reset: (state: FieldAttemptState) => initialState,
  },
});

const { actions, reducer } = fieldAttemptSlice;

export const { reset } = actions;
export default reducer;

export const attempt = () => {
  return async (dispatch: any, getState: any) => {
    const state: {
      Round: RoundState;
      FieldAttempt: FieldAttemptState;
      ActiveField: ActiveFieldState;
      NBack: NBackState;
      Counter: CounterState;
    } = getState();

    const field = state.ActiveField.field;
    const round = state.Counter.count;
    const nback = state.NBack.n;
    const nbackRound = state.Round.rounds.find((r) => r.round == round - nback);

    if (nbackRound) {
      dispatch(
        actions.add({
          round,
          nback,
          success: nbackRound.field == field,
        }),
      );
    }
  };
};
