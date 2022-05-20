import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isHamburgerActive: false
};

const hamburgerSlice = createSlice({
  initialState,
  name: 'hamburger',
  reducers: {
    setHamburger: (state, { payload }) => ({ isHamburgerActive: payload })
  }
});

export const { setHamburger } = hamburgerSlice.actions;

export default hamburgerSlice.reducer;
