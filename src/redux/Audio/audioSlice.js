/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  currentTrack: {
    id: '',
    src: '',
    artist: '',
    title: '',
    duration: 0,
    image: null,
    queuePosition: 0
  },
  isRandomizing: false,
  isActive: false,
  queue: [],
  randomizedQueue: [],
  historicQueue: [],
  volume: 0.5
};

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setTrackToQueue: (state, { payload }) => {
      if (state.queue.some((track) => track.src === payload.src)) {
        toast.error('Track already added in queue!');
        toast.remove();
        return;
      }
      if (state.queue.length === 0) {
        state.currentTrack.id = payload.id;
        state.currentTrack.src = payload.src;
        state.currentTrack.image = payload.image;
        state.currentTrack.artist = payload.artist;
        state.currentTrack.title = payload.title;
        state.currentTrack.duration = payload.duration;
        state.isActive = true;
      }
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
      state.currentTrack.id = payload.id;
      state.currentTrack.src = payload.src;
      state.currentTrack.image = payload.image;
      state.currentTrack.artist = payload.artist;
      state.currentTrack.title = payload.title;
      state.currentTrack.duration = payload.duration;
      state.isActive = true;
      if (state.queue.length === 0) {
        state.queue = [payload];
      } else {
        state.historicQueue = [...state.historicQueue, state.currentTrack];
      }
    },
    removeQueue: (state) => {
      state.queue = [];
    },
    setVolume: (state, { payload }) => {
      state.volume = payload;
    },
    setIsRandomizing: (state, { payload }) => {
      state.isRandomizing = payload;
    },
    setIsActive: (state, { payload }) => {
      state.isActive = payload;
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
  removeQueue,
  setIsRandomizing,
  setIsActive
} = audioSlice.actions;

export default audioSlice.reducer;
