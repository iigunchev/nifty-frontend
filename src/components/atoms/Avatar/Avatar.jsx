import React from 'react';
// components
import Avvvatars from 'avvvatars-react';
// redux
import { useSelector } from 'react-redux';
// styles
import './Avatar.scss';

function Avatar({ size = 150 }) {
  const user = useSelector((state) => state.user);
  return !user.profileImage ? (
    <Avvvatars radius="40" value={user.email} className="avatar" size={size} />
  ) : (
    <div className="avatarImageWrapper">
      <img src={user.profileImage} alt="avatar" className="avatar" />
    </div>
  );
}

export default Avatar;
