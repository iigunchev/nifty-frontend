import { React } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import LOGO from '../../assets/svg/LogoViolet.svg';
import LOGO2 from '../../assets/img/img1.jpg';

import './Home.scss';

function Home() {
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate('/login');
  };
  const handleLogOut = () => {
    // navigate('/login');
  };

  return (
    <div>
      <ul className="menu">
        <li>
          <img src={LOGO} alt="nifty-logo" />
        </li>
        <li>
          <a href="http://localhost:3000/login">Sign In</a>
        </li>
        <li>{user?.email}</li>
        <li>
          <a href="http://localhost:3000/sign-up">START</a>
        </li>
      </ul>
      <button
        type="button"
        onClick={user.isLoggedIn ? handleLogOut : handleLogIn}
      >
        {user.isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
      <img src={LOGO2} alt="nifty-logo" />
    </div>
  );
}

export default Home;
