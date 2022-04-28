import React from 'react';
// react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import Home from './pages/Home/Home';
import * as route from './routes';
import ProtectedRoute from './components/molecules/ProtectedRoute/ProtectedRoute';
import Login from './pages/Login/Login';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Signup from './pages/SignUp/Signup';

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
        <Route path={route.LOGIN} element={<Login />} />
        <Route path={route.SIGN_UP} element={<Signup />} />
        <Route path={route.RESET_PASSWORD} element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
