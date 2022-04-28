import React from 'react';
// react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import Home from './pages/Home/Home';
import * as route from './routes';
import ProtectedRoute from './components/molecules/ProtectedRoute/ProtectedRoute';
import Login from './components/organism/Login/Login';
import SignUp from './components/organism/SignUp/SignUp';
import ResetPassword from './components/organism/ResetPassword/ResetPassword';
import AuthTemplate from './components/template/AuthTemplate';

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
          path={route.LOGIN}
          element={
            <AuthTemplate>
              <Login />
            </AuthTemplate>
          }
        />
        <Route
          path={route.SIGN_UP}
          element={
            <AuthTemplate>
              <SignUp />
            </AuthTemplate>
          }
        />
        <Route
          path={route.RESET_PASSWORD}
          element={
            <AuthTemplate>
              <ResetPassword />
            </AuthTemplate>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
