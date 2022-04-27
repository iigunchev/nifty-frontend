import React from 'react';
// react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import * as route from './routes';
import ProtectedRoute from './components/molecules/ProtectedRoute/ProtectedRoute';

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
        <Route path={route.SIGN_UP} element={<SignUp />} />
        <Route path={route.LOGIN} element={<Login />} />
        <Route path={route.RESET_PASSWORD} element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
