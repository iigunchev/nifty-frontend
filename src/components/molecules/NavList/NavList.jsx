import React from 'react';

import './NavList.scss';

function NavList({ title, children }) {
  return (
    <div className="navListWrapper">
      <h4>{title}</h4>
      <ul>{children}</ul>
    </div>
  );
}

export default NavList;
