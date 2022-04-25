import React from 'react';
// react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import * as route from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={route.HOME} element={<Home />} />
        <Route path={route.SIGN_UP} element={<SignUp />} />
        <Route path={route.LOGIN} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
