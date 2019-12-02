import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ActiveFieldState {
  field: number;
}

const initialState: ActiveFieldState = {
  field: 0,
};

const activeFieldSlice = createSlice({
  name: 'activeField',
  initialState,
  reducers: {
    setActiveField: (
      state: ActiveFieldState,
      action: PayloadAction<number>,
    ) => ({
      field: action.payload,
    }),
  },
});

const { actions, reducer } = activeFieldSlice;

export const { setActiveField } = actions;
export default reducer;
