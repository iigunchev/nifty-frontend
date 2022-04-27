import React from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import LOGO from '../../assets/svg/LogoViolet.svg';

function Home() {
  const user = useSelector((state) => state.user);
  console.log('🚀 ~ file: Home.jsx ~ line 9 ~ Home ~ user', user);

  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate('/login');
  };
  const handleLogOut = () => {
    // navigate('/login');
  };
  return (
    <div>
      CAMARA DE LOS SECRETOS
      <button
        type="button"
        onClick={user.isLoggedIn ? handleLogOut : handleLogIn}
      >
        {user.isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
      <img src={LOGO} alt="nifty-logo" />
    </div>
  );
}

export default Home;
