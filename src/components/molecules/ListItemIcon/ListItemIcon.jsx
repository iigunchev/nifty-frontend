import React from 'react';

import './ListItemIcon.scss';

// icons
import home from '../../../assets/svg/asideSvg/home.svg';

function ListItemIcon({ icon = 'home', children }) {
  const icons = {
    home
  };
  return (
    <li>
      <img src={icons[icon]} alt={icons[icon]} />
      <span>{children}</span>
    </li>
  );
}

export default ListItemIcon;
