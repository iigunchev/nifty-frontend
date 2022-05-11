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
    setTrackToQueue: (state, { payload }) => {
      console.log(state.queue);
      state.queue = [...state.queue, payload];
    },
    setTrackPosition: ({ currentTrack, queue }) => {
      if (!currentTrack.src || queue.length === 0) return;
      const index = queue.findIndex((track) => track.src === currentTrack.src);
      currentTrack.queuePosition = index;
    },
    setQueue: (state, { payload }) => {
      state.queue = payload;
    },
    setCurrentTrack: (state, { payload }) => {
      state.currentTrack = payload;
      if (state.queue.length === 0) {
        state.queue = [payload];
      }
    },
    removeQueue: (state) => {
      state.queue = [];
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
  setTrackPosition,
  setTrackToQueue,
  removeQueue
} = audioSlice.actions;

export default audioSlice.reducer;
