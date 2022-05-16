import { createSlice } from '@reduxjs/toolkit';

/*
{
    tracks: [],
    name: '',
    image: null,
    description: ''
  }
*/
const initialState = [];

const userPlaylistSlice = createSlice({
  name: 'userPlaylists',
  initialState,
  reducers: {
    addPlaylist: (state, { payload }) => [...state, payload]
  }
});

export const { addPlaylist } = userPlaylistSlice.actions;

export default userPlaylistSlice.reducer;
