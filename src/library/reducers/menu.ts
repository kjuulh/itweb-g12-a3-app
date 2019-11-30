import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    menuOpen: false,
  },
  reducers: {
    menuOpened: (state) => ({ ...state, menuOpen: true }),
    menuClosed: (state) => ({ ...state, menuOpen: false }),
  },
});

const { actions, reducer } = menuSlice;

export const { menuOpened: menuOpened, menuClosed: menuClosed } = actions;
export default reducer;
