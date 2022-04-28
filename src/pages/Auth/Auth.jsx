import React from 'react';
import { Outlet } from 'react-router-dom';
import './Auth.scss';

// icons
import LOGO from '../../assets/svg/LogoViolet.svg';

function Auth() {
  return (
    <main className="loginContainer">
      <div className="logoWrapper">
        <img src={LOGO} alt="nifty Logo" className="logo-md" />
      </div>
      <section className="sectionWrapper">
        <Outlet />
      </section>
    </main>
  );
}

export default Auth;
