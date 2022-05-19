import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { APP, SIGN_UP } from '../../routes';

import LOGO from '../../assets/svg/LogoViolet.svg';
import GIRL from '../../assets/svg/woman-music.svg';
import Button from '../../components/molecules/Button/Button';
import SelectLang from '../../components/atoms/SelectLang/SelectLang';

import Avatar from '../../components/atoms/Avatar/Avatar';

import './Landing.scss';

function Landing() {
  const user = useSelector((state) => state.user);
  return (
    <div className="landingContainer">
      <header className="headerWrapper">
        <div className="logoWrapper">
          <img src={LOGO} alt="girl-music" />
        </div>
        <nav className="navWrapper">
          <ul className="navList">
            <li className="navListSelectLng">
              <SelectLang />
            </li>

            {!user.isLoggedIn ? (
              <>
                <li className="navListSignUp">
                  <a href="/sign-up">Sign Up</a>
                </li>
                <li className="navListLogIn">
                  <a href="/login">Log In</a>
                </li>
              </>
            ) : (
              <li className="AvatarLogin">
                <div className="landingAvatarWrapper">
                  <Avatar size={50} />
                </div>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <article className="flexWrapper">
        <section className="leftLandingSection">
          <div className="leftLandingWrapper">
            <div className="newFeatureContainer">
              <span className="newFeatureTitle">NEW</span>
              <span className="newFeatureText">Create your own playlist</span>
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
              <Button>
                {!user.isLoggedIn ? (
                  <Link to={SIGN_UP}>START NOW</Link>
                ) : (
                  <Link to={APP}>START NOW</Link>
                )}
              </Button>
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
