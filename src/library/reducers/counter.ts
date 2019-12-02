import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: CounterState) => ({ count: state.count + 1 }),
    reset: (state: CounterState) => initialState,
  },
});

const { actions, reducer } = counterSlice;

export const { increment, reset } = actions;
export default reducer;
