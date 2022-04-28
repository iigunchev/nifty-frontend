import React from 'react';
import UserInfoRow from '../../components/molecules/UserInfoRow/UserInfoRow';

import './Account.scss';

const mockUser = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  password: '**********'
};

function Account() {
  // const [user, setUser] = useState('');

  // useEffect(() => {}, []);
  return (
    <main className="accountContainer">
      <h1>Account</h1>
      <div className="accountCols">
        <div>
          <section>
            <h2>Details</h2>
            <UserInfoRow type="First Name" details={mockUser.firstName} />
            <UserInfoRow type="Last Name" details={mockUser.lastName} />
            <UserInfoRow type="Email" details={mockUser.email} />
          </section>
          <div className="buttonWrapper">
            <button type="button">Update Profile</button>
          </div>
          <section>
            <div>
              <h2>Password</h2>
              <UserInfoRow type="Password" details={mockUser.password} />
            </div>
          </section>
          <div className="buttonWrapper">
            <button type="button">Change Password</button>
          </div>
        </div>
        <div>
          <img
            className="avatar"
            src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png"
            alt="user avatar"
          />
          <button type="button" className="updateAvatar">
            Change Image
          </button>
        </div>
      </div>
    </main>
  );
}

export default Account;
