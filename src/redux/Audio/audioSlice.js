/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // info song,
  src: '',
  track: null,
  volume: 0.5,
  isPlaying: false,
  artist: '',
  title: ''
};

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setAudio: (state, { payload }) => {
      state.src = payload.src;
      state.artist = payload.artist;
      state.title = payload.title;
    },
    setTrack: (state, { payload }) => {
      state.track = payload;
    },
    setVolume: (state, { payload }) => {
      state.volume = payload;
    }
  }
});

export const { setTrack, setAudio, setVolume } = audioSlice.actions;

export default audioSlice.reducer;
