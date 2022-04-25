/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  firstName: '',
  lastName: '',
  email: null,
  token: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => ({ ...state, ...payload }),
    removeUser: (state) => {
      state.user = initialState;
    }
  }
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
