/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // info song,
  src: '',
  track: null,
  volume: 0.5,
  isPlaying: false,
  title: ''
};

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setSrc: (state, { payload }) => {
      state.src = payload;
    },
    setTrack: (state, { payload }) => {
      state.track = payload;
    },
    setVolume: (state, { payload }) => {
      state.volume = payload;
    }
  }
});

export const { setTrack, setSrc, setVolume } = audioSlice.actions;

export default audioSlice.reducer;
