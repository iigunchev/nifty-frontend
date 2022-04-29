import React from 'react';
// react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import Home from './pages/Home/Home';
import * as route from './routes';
import ProtectedRoute from './components/molecules/ProtectedRoute/ProtectedRoute';
import Login from './pages/Login/Login';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Signup from './pages/Signup/Signup';
import Account from './pages/Account/Account';
import EditProfile from './pages/Account/EditProfile/EditProfile';
import ChangePassword from './pages/Account/ChangePassword/ChangePassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={route.HOME}
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path={route.ACCOUNT}
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />

        <Route
          path={route.EDIT_PROFILE}
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path={route.CHANGE_PASSWORD}
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
        />

        <Route path={route.LOGIN} element={<Login />} />
        <Route path={route.SIGN_UP} element={<Signup />} />
        <Route path={route.RESET_PASSWORD} element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
