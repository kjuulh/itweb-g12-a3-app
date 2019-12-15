import { createSlice } from '@reduxjs/toolkit';

export interface NBackState {
  n: number;
}

const initialState: NBackState = {
  n: 1,
};

const nBackSlice = createSlice({
  name: 'nBack',
  initialState,
  reducers: {
    set: (state: NBackState) => ({ n: state.n + 1 }),
    reset: (state: NBackState) => ({ ...initialState }),
  },
});

const { actions, reducer } = nBackSlice;

export const { set, reset } = actions;
export default reducer;
