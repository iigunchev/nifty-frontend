/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { getCurrentUserProviderId } from '../../services/auth/auth';

const initialState = {
  id: '',
  firstName: '',
  lastName: '',
  email: null,
  followedBy: [],
  following: [],
  language: 'en',
  artist: false,
  profileImage: null,
  isLoggedIn: false,
  providerId: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLanguage: (state, { payload }) => {
      state.language = payload;
    },
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
      state.providerId = getCurrentUserProviderId();
    },
    removeUser: () => {
      storage.removeItem('persist:root');
      return { ...initialState };
    }
  }
});

export const { setUser, removeUser, setLanguage } = userSlice.actions;

export default userSlice.reducer;
