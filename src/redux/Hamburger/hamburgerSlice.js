import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const hamburgerSlice = createSlice({
  initialState,
  name: 'hamburger',
  reducers: {
    setHamburger: (state, { payload }) => payload
  }
});

export const { setHamburger } = hamburgerSlice.actions;

export default hamburgerSlice.reducer;
