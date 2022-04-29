/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

const initialState = {
  id: '',
  firstName: '',
  lastName: '',
  email: null,
  followedBy: [],
  following: [],
  language: 'en',
  artist: false,
  isLoggedIn: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.id = payload._id;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.email = payload.email;
      state.followedBy = payload.followedBy;
      state.following = payload.following;
      state.language = payload.language;
      state.artist = payload.artist;
      state.isLoggedIn = true;
    },
    removeUser: () => {
      storage.removeItem('persist:root');
      return { ...initialState };
    }
  }
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
