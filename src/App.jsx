import React from 'react';
// react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import * as route from './routes';
import ProtectedRoutes from './components/template/ProtectedRoutes/ProtectedRoutes';
import Login from './pages/Login/Login';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Signup from './pages/SignUp/SignUp';
import Landing from './pages/Landing/Landing';
import TrendingList from './components/organism/TrendingList/TrendingList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${route.APP}/*`} element={<ProtectedRoutes />} />
        <Route path={route.LANDING} element={<Landing />} />
        <Route path={route.LOGIN} element={<Login />} />
        <Route path={route.SIGN_UP} element={<Signup />} />
        <Route path={route.RESET_PASSWORD} element={<ResetPassword />} />
        <Route path="trending-tracks" element={<TrendingList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
