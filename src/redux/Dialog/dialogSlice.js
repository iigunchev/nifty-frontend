/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  modalAction: '',
  track: {
    id: '',
    src: '',
    img: '',
    name: '',
    genre: ''
  }
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    setTrack: (state, { payload }) => {
      state.track.id = payload.id;
      state.track.src = payload.src;
      state.track.name = payload.name;
      state.track.img = payload.img;
      state.track.genre = payload.genre;
      state.modalAction = payload.action;
    }
  }
});

export const { openModal, closeModal, setTrack } = dialogSlice.actions;

export default dialogSlice.reducer;
