import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import userSlice from './User/userSlice';
import audioSlice from './Audio/audioSlice';
import dialogSlice from './Dialog/dialogSlice';
import userPlaylistSlice from './UserPlaylists/userPlaylistsSlice';

const reducers = combineReducers({
  user: userSlice,
  audio: audioSlice,
  dialog: dialogSlice,
  userPlaylists: userPlaylistSlice
});
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['audio', 'dialog']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export default store;
