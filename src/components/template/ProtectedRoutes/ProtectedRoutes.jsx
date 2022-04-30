import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as route from '../../../routes';
import Home from '../../../pages/Home/Home';
import Account from '../../../pages/Account/Account';
import EditProfile from '../../../pages/Account/EditProfile/EditProfile';
import ChangePassword from '../../../pages/Account/ChangePassword/ChangePassword';

function ProtectedRoutes() {
  const isAuthenticated = useSelector((state) => state.user.isLoggedIn);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return (
    <Routes>
      <Route path={route.HOME} element={<Home />} />

      <Route path={route.ACCOUNT} element={<Account />} />

      <Route path="/account/edit-profile" element={<EditProfile />} />
      <Route path="/account/change-password" element={<ChangePassword />} />
    </Routes>
  );
}

export default ProtectedRoutes;
