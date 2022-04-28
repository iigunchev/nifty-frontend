import React from 'react';

// scss
import './AuthTemplate.scss';
// icons
import LOGO from '../../assets/svg/LogoViolet.svg';

function AuthTemplate({ children }) {
  return (
    <main className="loginContainer">
      <div className="logoWrapper">
        <img src={LOGO} alt="nifty Logo" className="logo-md" />
      </div>
      <section className="sectionWrapper">{children}</section>
    </main>
  );
}

export default AuthTemplate;
