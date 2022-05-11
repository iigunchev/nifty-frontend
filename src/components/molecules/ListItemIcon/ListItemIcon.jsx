import React from 'react';

import './ListItemIcon.scss';
// router
import { Link, useLocation } from 'react-router-dom';

// icons
import home from '../../../assets/svg/asideSvg/home.svg';
import homeFilled from '../../../assets/svg/asideSvg/homeFilled.svg';
import albums from '../../../assets/svg/asideSvg/albums.svg';
import albumsFilled from '../../../assets/svg/asideSvg/albumsFilled.svg';
import artists from '../../../assets/svg/asideSvg/artists.svg';
import artistsFilled from '../../../assets/svg/asideSvg/artistsFilled.svg';
import genres from '../../../assets/svg/asideSvg/genres.svg';
import genresFilled from '../../../assets/svg/asideSvg/genresFilled.svg';
import favourites from '../../../assets/svg/asideSvg/heart.svg';
import favouritesFilled from '../../../assets/svg/asideSvg/heartFilled.svg';
import upload from '../../../assets/svg/asideSvg/upload.svg';
import uploadFilled from '../../../assets/svg/asideSvg/uploadFilled.svg';
import account from '../../../assets/svg/asideSvg/user-circle.svg';
import accountFilled from '../../../assets/svg/asideSvg/user-circleFilled.svg';
import logout from '../../../assets/svg/asideSvg/logout.svg';
import myUploads from '../../../assets/svg/asideSvg/myUploads.svg';
import myUploadsFilled from '../../../assets/svg/asideSvg/myUploadsFilled.svg';

function ListItemIcon({ icon = 'home', children, route = '/app' }) {
  // ? selected has to be this component?
  const { pathname } = useLocation();
  const icons = {
    home,
    homeFilled,
    albums,
    albumsFilled,
    artists,
    artistsFilled,
    genres,
    genresFilled,
    favourites,
    favouritesFilled,
    myUploads,
    myUploadsFilled,
    upload,
    uploadFilled,
    account,
    accountFilled,
    logout
  };
  return (
    <li>
      <Link
        className={
          pathname === route ? 'listItemLink activeLink' : 'listItemLink'
        }
        to={route}
      >
        <img
          src={pathname === route ? icons[`${icon}Filled`] : icons[icon]}
          alt={icons[icon]}
        />
        <span>{children}</span>
      </Link>
    </li>
  );
}

export default ListItemIcon;
