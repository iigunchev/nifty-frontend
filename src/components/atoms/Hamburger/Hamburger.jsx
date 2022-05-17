import React, { useState } from 'react';
// styles
import './Hamburger.scss';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { t } from 'i18next';
import { removeUser } from '../../../redux/User/userSlice';
// components
import ListItemIcon from '../../molecules/ListItemIcon/ListItemIcon';
import NavList from '../../molecules/NavList/NavList';
// routes
import * as route from '../../../routes';
// icons
import logout from '../../../assets/svg/asideSvg/logout.svg';
import hamburgerIcon from '../../../assets/svg/hamburger.svg';
import crossIcon from '../../../assets/svg/cross.svg';

function Hamburger() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <button
        className="hamburgerButton"
        type="button"
        onClick={() => setIsVisible(!isVisible)}
      >
        <img src={isVisible ? crossIcon : hamburgerIcon} alt="hamburger" />
      </button>
      {isVisible ? (
        <div className="hamburgerWrapper">
          <NavList title="Menu">
            <ListItemIcon route={route.APP} icon="home">
              Home
            </ListItemIcon>
            <ListItemIcon
              route={`${route.APP}${route.GENRES}`}
              selected
              icon="genres"
            >
              Genres
            </ListItemIcon>
            <ListItemIcon
              route={`${route.APP}${route.PLAYLISTS}`}
              icon="albums"
            >
              Playlists
            </ListItemIcon>
            <ListItemIcon route={`${route.APP}${route.ARTISTS}`} icon="artists">
              Artists
            </ListItemIcon>
          </NavList>
          <NavList title="Library">
            <ListItemIcon
              route={`${route.APP}${route.MY_LIKES}`}
              icon="favourites"
            >
              My music
            </ListItemIcon>
            <ListItemIcon
              route={`${route.APP}${route.MY_PLAYLISTS}`}
              icon="playlist"
            >
              {t('aside.myPlaylist')}
            </ListItemIcon>
            {user.artist ? (
              <ListItemIcon
                route={`${route.APP}${route.UPLOAD_TRACK}`}
                icon="upload"
              >
                Upload
              </ListItemIcon>
            ) : null}
            {user.artist ? (
              <ListItemIcon
                route={`${route.APP}${route.MY_UPLOADS}`}
                icon="myUploads"
              >
                {t('aside.myUploads')}
              </ListItemIcon>
            ) : null}
          </NavList>

          <NavList title="Settings">
            <ListItemIcon icon="account" route={`${route.APP}${route.ACCOUNT}`}>
              Account
            </ListItemIcon>
            <li className="listItemLink">
              <button
                onClick={() => dispatch(removeUser())}
                type="button"
                className="listItemLink"
              >
                <img src={logout} alt="logout" />
                <span>Sign out</span>
              </button>
            </li>
          </NavList>
        </div>
      ) : null}
    </>
  );
}

export default Hamburger;
