/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // info song,
  currentTrack: {
    src: '',
    artist: '',
    title: '',
    image: null,
    queuePosition: 0
  },
  queue: [],
  volume: 0.5
};

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setTrackPosition: ({ currentTrack, queue }) => {
      if (!currentTrack.src || queue.length === 0) return;
      const index = queue.findIndex((track) => track.src === currentTrack.src);
      currentTrack.queuePosition = index;
    },
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

export const {
  setCurrentTrack,
  setAudio,
  setVolume,
  setQueue,
  setTrackPosition
} = audioSlice.actions;

export default audioSlice.reducer;
