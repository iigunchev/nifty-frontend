import React from 'react';
// router dom
import { Navigate, Route, Routes } from 'react-router-dom';
// redux
import { useSelector } from 'react-redux';
// routes
import * as route from '../../../routes';
// component pages
import Home from '../../../pages/Home/Home';
import EditProfile from '../../../pages/Account/EditProfile/EditProfile';
import ChangePassword from '../../../pages/Account/ChangePassword/ChangePassword';
import BecomeArtist from '../../../pages/Account/BecomeArtist/BecomeArtist';
import AppTemplate from '../AppTemplate/AppTemplate';
import MyLikes from '../../../pages/MyLikes/MyLikes';
import UploadTrack from '../../../pages/UploadTrack/UploadTrack';
import Account from '../../../pages/Account/Account';
import Playlists from '../../../pages/Playlists/Playlists';
import Artists from '../../../pages/Artists/Artists';
import Artist from '../../../pages/Artist/Artist';
import Search from '../../../pages/Search/Search';
// import Genre from '../../../pages/Genre/Genre';
import MyUploads from '../../../pages/MyUploads/MyUploads';
import MyPlaylists from '../../../pages/MyPlaylists/MyPlaylists';
import Playlist from '../../../pages/Playlist/Playlist';
import Queue from '../../../pages/Queue/Queue';

function ProtectedRoutes() {
  const isAuthenticated = useSelector((state) => state.user.isLoggedIn);

  if (!isAuthenticated) {
    return <Navigate to={route.LANDING} replace />;
  }
  return (
    <AppTemplate>
      <Routes>
        {/* ASIDE ROUTES */}
        <Route path={route.HOME} element={<Home />} />
        <Route path={route.UPLOAD_TRACK} element={<UploadTrack />} />
        <Route path={route.MY_LIKES} element={<MyLikes />} />
        <Route path={route.MY_UPLOADS} element={<MyUploads />} />
        <Route path={route.MY_PLAYLISTS} element={<MyPlaylists />} />
        <Route path={route.PLAYLISTS} element={<Playlists />} />
        <Route path={route.ARTISTS} element={<Artists />} />
        <Route path={route.SEARCH} element={<Search />} />

        {/* QUEUE */}
        <Route path={route.QUEUE} element={<Queue />} />
        {/* ACCOUNT  */}
        <Route path={route.ACCOUNT} element={<Account />} />
        <Route path={route.EDIT_PROFILE} element={<EditProfile />} />
        <Route path={route.CHANGE_PASSWORD} element={<ChangePassword />} />
        <Route path={route.BECOME_ARTIST} element={<BecomeArtist />} />

        {/* DYNAMIC ROUTES */}
        <Route path={route.ARTIST} element={<Artist />} />
        <Route path={route.PLAYLIST} element={<Playlist />} />
      </Routes>
    </AppTemplate>
  );
}

export default ProtectedRoutes;
