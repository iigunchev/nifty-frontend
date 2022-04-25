import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/User/userSlice';

import './Login.scss';

function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  const handleLogin = () => {
    dispatch(
      setUser({
        email: 'sadasdasdasdlasda',
        token: 'asd',
        id: '4'
      })
    );
  };

  return (
    <>
      <button onClick={handleLogin} type="button">
        login
      </button>
      <span>{user?.email}</span>
    </>
  );
}

export default Login;
