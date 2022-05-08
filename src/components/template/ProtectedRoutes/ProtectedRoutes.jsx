import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as route from '../../../routes';
import Home from '../../../pages/Home/Home';
import Account from '../../../pages/Account/Account';
import EditProfile from '../../../pages/Account/EditProfile/EditProfile';
import ChangePassword from '../../../pages/Account/ChangePassword/ChangePassword';
import BecomeArtist from '../../../pages/Account/BecomeArtist/BecomeArtist';
import AppTemplate from '../AppTemplate/AppTemplate';
import UploadTrack from '../../../pages/UploadTrack/UploadTrack';

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
      </Routes>
    </AppTemplate>
  );
}

export default ProtectedRoutes;
