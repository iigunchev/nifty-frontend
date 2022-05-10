/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // info song,
  currentTrack: {
    src: '',
    artist: '',
    title: '',
    image: null
  },
  queue: [],
  volume: 0.5
};

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setQueue: (state, { payload }) => {
      state.queue = payload;
    },
    setAudio: (state, { payload }) => {
      state.src = payload.src;
      state.artist = payload.artist;
      state.title = payload.title;
      state.image = payload.image;
    },
    setCurrentTrack: (state, { payload }) => {
      state.currentTrack = payload;
    },
    setVolume: (state, { payload }) => {
      state.volume = payload;
    }
  }
});

export const { setCurrentTrack, setAudio, setVolume, setQueue } =
  audioSlice.actions;

export default audioSlice.reducer;
