import React from 'react';
// react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import Home from './pages/Home/Home';
import * as route from './routes';
import ProtectedRoute from './components/molecules/ProtectedRoute/ProtectedRoute';
import Auth from './pages/Auth/Auth';
import Login from './components/organism/Login/Login';
import SignUp from './components/organism/SignUp/SignUp';
import ResetPassword from './components/organism/ResetPassword/ResetPassword';

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
        <Route path={route.AUTH} element={<Auth />}>
          <Route path={`${route.AUTH}/${route.LOGIN}`} element={<Login />} />
          <Route path={`${route.AUTH}/${route.SIGN_UP}`} element={<SignUp />} />
          <Route
            path={`${route.AUTH}/${route.RESET_PASSWORD}`}
            element={<ResetPassword />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
