import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// components
import Avvvatars from 'avvvatars-react';
import UserInfoRow from '../../components/molecules/UserInfoRow/UserInfoRow';

import './Account.scss';

function Account() {
  const user = useSelector((state) => state.user);
  return (
    <main className="accountContainer">
      <h1>Account</h1>
      <div className="accountCols">
        <div>
          <section>
            <h2>Details</h2>
            <UserInfoRow type="First Name" details={user.firstName} />
            <UserInfoRow type="Last Name" details={user.lastName} />
            <UserInfoRow type="Email" details={user.email} />
          </section>
          <div className="buttonWrapper">
            <Link to="/account/edit-profile" className="accountLink">
              Edit Profile
            </Link>
          </div>
          <section>
            <div>
              <h2>Password</h2>
              <UserInfoRow type="Password" details="**********" />
            </div>
          </section>
          <div className="buttonWrapper">
            <Link to="/account/change-password" className="accountLink">
              Change Password
            </Link>
          </div>
        </div>

        <label htmlFor="uploadImage" className="updateAvatar">
          {(!user.profileImage && (
            <Avvvatars value={user.email} size="150" className="avatar" />
          )) || <img src={user.profileImage} alt="avatar" />}
          <p>Edit</p>
          <input type="file" hidden id="uploadImage" />
        </label>
      </div>
    </main>
  );
}

export default Account;
