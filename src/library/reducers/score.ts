import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
export const { add, reset } = actions;
export default reducer;
