/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  email: null,
  token: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.email = payload.email;
      state.id = payload.id;
      state.token = payload.token;
    },
    removeUser: (state) => {
      state.user = initialState;
    }
  }
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
