/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  audio: '',
  isPlaying: false
};

const songSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    setSong: (state, { payload }) => ({
      audio: new Audio(payload),
      isPlaying: true
    })
  }
});

export const { setSong } = songSlice.actions;

export default songSlice.reducer;
