/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

const initialState = {
  id: '',
  firstName: '',
  lastName: '',
  email: null,
  token: null,
  isLoggedIn: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => ({
      ...state,
      ...payload,
      isLoggedIn: true
    }),
    removeUser: (state) => {
      state.user = initialState;
    },
    clearUser() {
      storage.removeItem('persist:root');
    }
  }
});

export const { setUser, removeUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
