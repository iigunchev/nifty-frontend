import React from 'react';

import LOGO from '../../assets/svg/LogoViolet.svg';
import GIRL from '../../assets/svg/woman-music.svg';
import Button from '../../components/molecules/Button/Button';
import SelectLang from '../../components/atoms/SelectLang/SelectLang';

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
      <article className="flexWrapper">
        <section className="leftLandingSection">
          <div className="leftLandingWrapper">
            <div className="newContainer">
              <span>NEW</span>
              <p>Create your own playlist</p>
            </div>
            <p className="headingTitle">
              Never Stop <br />
              Listening
            </p>
            <p className="landingText">
              Discover, stream and share a constantly expanding mix of music
              from emerging and major artists around the world
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
      </article>
    </div>
  );
}

export default Landing;
