import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// components
import UserInfoRow from '../../components/molecules/UserInfoRow/UserInfoRow';
// routes
import { APP, CHANGE_PASSWORD, EDIT_PROFILE } from '../../routes';
import './Account.scss';
import Avatar from '../../components/atoms/Avatar/Avatar';

function Account() {
  const user = useSelector((state) => state.user);
  return (
    <main className="accountContainer">
      <h1 className="heading1">Account</h1>
      <div className="accountCols">
        <div>
          <section>
            <h2 className="heading2">Details</h2>
            <UserInfoRow type="First Name" details={user.firstName} />
            <UserInfoRow type="Last Name" details={user.lastName} />
            <UserInfoRow type="Email" details={user.email} />
          </section>
          <div className="buttonWrapper">
            <Link to={`${APP}${EDIT_PROFILE}`} className="accountLink">
              Edit Profile
            </Link>
          </div>
          <section>
            <div>
              <h2 className="heading2">Password</h2>
              <UserInfoRow type="Password" details="**********" />
            </div>
          </section>
          <div className="buttonWrapper">
            <Link to={`${APP}${CHANGE_PASSWORD}`} className="accountLink">
              Change Password
            </Link>
          </div>
        </div>

        <label htmlFor="uploadImage" className="updateAvatar">
          <Avatar />
          <span className="editAvatarButton">Edit</span>
          <input type="file" hidden id="uploadImage" />
        </label>
      </div>
    </main>
  );
}

export default Account;
