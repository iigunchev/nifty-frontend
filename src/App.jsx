import React from 'react';
import { Provider } from 'react-redux';
// react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
// pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import store from './redux/store';
import * as route from './routes';

import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={route.HOME} element={<Home />} />
          <Route path={route.SIGN_UP} element={<SignUp />} />
          <Route path={route.LOGIN} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
