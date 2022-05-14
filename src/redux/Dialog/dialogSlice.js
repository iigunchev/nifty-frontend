/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDeleteModalOpen: false,
  trackToDelete: {
    id: '',
    src: ''
  },
  isEditModalOpen: false
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    toggleDeleteModal: (state, { payload }) => {
      state.isDeleteModalOpen = payload;
    },
    setTrackToDelete: (state, { payload }) => {
      state.trackToDelete.id = payload.id;
      state.trackToDelete.src = payload.src;
    },
    toggleEditModal: (state) => {
      state.isDeleteModalOpen = !state.isDeleteModalOpen;
    }
  }
});

export const { toggleDeleteModal, toggleEditModal, setTrackToDelete } =
  dialogSlice.actions;

export default dialogSlice.reducer;
