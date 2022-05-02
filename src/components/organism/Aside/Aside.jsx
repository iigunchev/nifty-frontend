import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '../../atoms/Avatar/Avatar';
import ListItemIcon from '../../molecules/ListItemIcon/ListItemIcon';
import NavList from '../../molecules/NavList/NavList';
import './Aside.scss';

function Aside() {
  const user = useSelector((state) => state.user);
  return (
    <aside className="asideNavigation">
      <div className="profileWrapper">
        <Avatar />
        <span>Hi!</span>
        <h3>{user.firstName}</h3>
      </div>
      <nav>
        <NavList title="Menu">
          <ListItemIcon icon="home">Home</ListItemIcon>
        </NavList>
      </nav>
    </aside>
  );
}

export default Aside;
