import { React } from 'react';

import './Home.scss';

import LOGO from '../../assets/svg/LogoViolet.svg';
import LOGO2 from '../../assets/img/img1.jpg';

function Home() {
  return (
    <div>
      <ul className="menu">
        <li>
          <img src={LOGO} alt="nifty-logo" />
        </li>
        <li>
          <a href="http://localhost:3000/login">Sign In</a>
        </li>
        <li>
          <a href="http://localhost:3000/sign-up">START</a>
        </li>
      </ul>
      <img src={LOGO2} alt="nifty-logo" />
    </div>
  );
}

export default Home;
