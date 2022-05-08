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
import MyMusic from '../../../pages/MyMusic/MyMusic';
import UploadTrack from '../../../pages/UploadTrack/UploadTrack';
import Account from '../../../pages/Account/Account';

function ProtectedRoutes() {
  const isAuthenticated = useSelector((state) => state.user.isLoggedIn);

  if (!isAuthenticated) {
    return <Navigate to={route.LANDING} replace />;
  }
  return (
    <AppTemplate>
      <Routes>
        <Route path={route.HOME} element={<Home />} />

        <Route path={route.ACCOUNT} element={<Account />} />
        <Route path={route.UPLOAD_TRACK} element={<UploadTrack />} />
        <Route path={route.EDIT_PROFILE} element={<EditProfile />} />
        <Route path={route.CHANGE_PASSWORD} element={<ChangePassword />} />
        <Route path={route.BECOME_ARTIST} element={<BecomeArtist />} />
        <Route path={route.MY_MUSIC} element={<MyMusic />} />
      </Routes>
    </AppTemplate>
  );
}

export default ProtectedRoutes;
