import React from 'react';

import LOGO from '../../assets/svg/LogoViolet.svg';
import GIRL from '../../assets/svg/woman-music.svg';
import Button from '../../components/molecules/Button/Button';
import SelectLang from '../../components/molecules/SelectLang/SelectLang';

import './Landing.scss';

function Landing() {
  return (
    <div className="landingContainer">
      <header className="headerWrapper">
        <div className="logoWrapper">
          <img src={LOGO} alt="girl-music" />
        </div>
        <nav className="navWrapper">
          <ul className="navList">
            <li>
              <SelectLang />
            </li>
            <li>
              <a href="http://localhost:3000/sign-up">Sign Up</a>
            </li>
            <li>
              <a href="http://localhost:3000/login">Log In</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="flexWrapper">
        <section className="leftLandingSection">
          <div className="leftLandingWrapper">
            <div className="new">
              <span>NEW</span>
              <p>Create your own playlist</p>
            </div>
            <h1>
              Never Stop <br />
              Listening
            </h1>
            <p className="landingText">
              Discover, stream and share a <br />
              constantly expanding mix of music
              <br /> from emerging and major artists
              <br /> around the world
            </p>
            <div className="buttonWrapper">
              <Button size="xl">START NOW</Button>
            </div>
          </div>
        </section>
        <section className="rightLandingSection">
          <div className="imggirl">
            <img src={GIRL} alt="girl-music" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Landing;
