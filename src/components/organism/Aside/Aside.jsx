import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListItemIcon from '../../molecules/ListItemIcon/ListItemIcon';
import NavList from '../../molecules/NavList/NavList';
import './Aside.scss';
// logout
import { removeUser } from '../../../redux/User/userSlice';

import * as route from '../../../routes';
// icons
import logout from '../../../assets/svg/asideSvg/logout.svg';
import Player from '../Player/Player';
import userIcon from '../../../assets/svg/user.svg';

function Aside() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  return (
    <>
      <div className="profileWrapper">
        {/* <Avatar size={40} /> */}
        <img src={userIcon} alt="user icon" className="asideUserSvg" />
        <h3>{user.firstName}</h3>
      </div>
      <nav className="navigationContainer">
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
          <ListItemIcon route={`${route.APP}${route.ALBUMS}`} icon="albums">
            Albums
          </ListItemIcon>
          <ListItemIcon route={`${route.APP}${route.ARTISTS}`} icon="artists">
            Artists
          </ListItemIcon>
        </NavList>
        <NavList title="Library">
          <ListItemIcon
            route={`${route.APP}${route.MY_MUSIC}`}
            icon="favourites"
          >
            My music
          </ListItemIcon>
          {user.artist ? (
            <ListItemIcon
              route={`${route.APP}${route.UPLOAD_TRACK}`}
              icon="upload"
            >
              Upload
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
      </nav>
      <Player />
    </>
  );
}

export default Aside;
