import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '../../atoms/Avatar/Avatar';
import ListItemIcon from '../../molecules/ListItemIcon/ListItemIcon';
import NavList from '../../molecules/NavList/NavList';
import './Aside.scss';

import * as route from '../../../routes';

function Aside() {
  const user = useSelector((state) => state.user);
  return (
    <aside className="appAside">
      <div className="profileWrapper">
        <Avatar size={100} />
        <span>Hi!</span>
        <h3>{user.firstName}</h3>
      </div>
      <nav className="navigationContainer">
        <NavList title="Menu">
          <ListItemIcon route={route.APP} icon="home">
            Home
          </ListItemIcon>
          <ListItemIcon route={route.GENRES} selected icon="genres">
            Genres
          </ListItemIcon>
          <ListItemIcon route={route.ALBUMS} icon="albums">
            Albums
          </ListItemIcon>
          <ListItemIcon route={route.ARTISTS} icon="artists">
            Artists
          </ListItemIcon>
        </NavList>
        <NavList title="Library">
          <ListItemIcon route={route.MY_MUSIC} icon="favourites">
            My music
          </ListItemIcon>
          <ListItemIcon route={route.UPLOAD_SONG} icon="upload">
            Upload
          </ListItemIcon>
        </NavList>
      </nav>
    </aside>
  );
}

export default Aside;
