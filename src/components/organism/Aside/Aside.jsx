import React from 'react';
// router dom
import { Link } from 'react-router-dom';
// redux
import { useSelector, useDispatch } from 'react-redux';
// i18n
import { useTranslation } from 'react-i18next';
// components
import ListItemIcon from '../../molecules/ListItemIcon/ListItemIcon';
import NavList from '../../molecules/NavList/NavList';
// styles
import './Aside.scss';
// logout redux
import { removeUser } from '../../../redux/User/userSlice';
// routes
import * as route from '../../../routes';
// icons
import logout from '../../../assets/svg/asideSvg/logout.svg';
import userIcon from '../../../assets/svg/user.svg';
import niftyLogo from '../../../assets/svg/LogoViolet.svg';

function Aside() {
  const dispatch = useDispatch();
  // i18
  const { t } = useTranslation();
  const user = useSelector((state) => state.user);
  return (
    <>
      <Link to={route.APP} className="asideLogoWrapper">
        <img src={niftyLogo} alt="logo" />
      </Link>
      <div className="profileWrapper">
        <img src={userIcon} alt="user icon" className="asideUserSvg" />
        <h3>{user.firstName}</h3>
      </div>
      <nav className="navigationContainer">
        {/* MENU */}
        <NavList title="Menu">
          <ListItemIcon route={route.APP} icon="home">
            {t('aside.home')}
          </ListItemIcon>
          <ListItemIcon
            route={`${route.APP}${route.SEARCH}`}
            selected
            icon="search"
          >
            {t('aside.search')}
          </ListItemIcon>
          <ListItemIcon route={`${route.APP}${route.PLAYLISTS}`} icon="albums">
            {t('aside.playlists')}
          </ListItemIcon>
          <ListItemIcon route={`${route.APP}${route.ARTISTS}`} icon="artists">
            {t('aside.artists')}
          </ListItemIcon>
        </NavList>
        {/* LIBRARY */}
        <NavList title="Library">
          <ListItemIcon
            route={`${route.APP}${route.MY_LIKES}`}
            icon="favourites"
          >
            {t('aside.myLikes')}
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
              {t('aside.upload')}
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
            {t('aside.account')}
          </ListItemIcon>
          <li className="listItemLink">
            <button
              onClick={() => dispatch(removeUser())}
              type="button"
              className="listItemLink"
            >
              <img src={logout} alt="logout" />
              <span>{t('aside.signOut')}</span>
            </button>
          </li>
        </NavList>
      </nav>
    </>
  );
}

export default Aside;
