import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  email: null,
  token: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
    },
    removeUser: (state) => {
      state.user = initialState;
    }
  }
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
