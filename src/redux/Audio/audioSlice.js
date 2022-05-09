/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // info song,
  src: '',
  track: null,
  volume: 0.5,
  barProgress: 0,
  isPlaying: false,
  artist: '',
  title: '',
  image: null
};

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setAudio: (state, { payload }) => {
      state.src = payload.src;
      state.artist = payload.artist;
      state.title = payload.title;
      state.image = payload.image;
    },
    setTrack: (state, { payload }) => {
      state.track = payload;
    },
    setCurrentTime: (state, { payload }) => {
      state.track.currenTime = payload;
    },
    setVolume: (state, { payload }) => {
      state.volume = payload;
    }
  }
});

export const { setTrack, setAudio, setVolume, setCurrentTime } =
  audioSlice.actions;

export default audioSlice.reducer;
