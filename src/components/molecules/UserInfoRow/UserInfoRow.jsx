import React from 'react';

import './UserInfoRow.scss';

function UserInfoRow({ type, details }) {
  return (
    <div className="userInfoRowContainer">
      <div className="userInfoWrapper">
        <span className="userInfoType">{type}</span>
      </div>
      <div className="userInfoWrapper">
        <span className="userInfoDetails">{details}</span>
      </div>
    </div>
  );
}

export default UserInfoRow;
