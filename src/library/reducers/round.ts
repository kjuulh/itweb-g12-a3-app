import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CounterState } from './counter';
import { setActiveField } from './activeField';
import { NBackState, set } from './nback';
import { setActiveSound } from './activeSound';

export interface Round {
  round: number;
  field: number;
  sound: number;
}

export interface RoundState {
  rounds: Round[];
}

const initialState: RoundState = {
  rounds: [],
};

const roundSlice = createSlice({
  name: 'rounds',
  initialState,
  reducers: {
    add: (state: RoundState, action: PayloadAction<Round>) => {
      return {
        rounds: [...state.rounds, action.payload],
      };
    },
    reset: (state: RoundState) => ({ ...initialState }),
  },
});

const { actions, reducer } = roundSlice;
export const { add, reset } = actions;
export default reducer;

export const addRound = (size: number) => {
  return async (dispatch: any, getState: any) => {
    const state: { Counter: CounterState; NBack: NBackState } = getState();

    const count = state.Counter.count;
    const n = state.NBack.n;

    const field = Math.floor(Math.random() * size ** 2) + 1;
    const sound = Math.floor(Math.random() * size ** 2) + 1;

    dispatch(
      add({
        round: count,
        field,
        sound,
      }),
    );
    dispatch(setActiveField(field));
    dispatch(setActiveSound(sound));

    const cn = Math.floor(count / 10) + 1;
    if (cn !== n) {
      dispatch(set());
    }
  };
};
