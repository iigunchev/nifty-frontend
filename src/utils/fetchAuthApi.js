import { deleteCurrentUser, getCurrentUserToken } from '../services/auth/auth';

//* SIGN UP FETCH AND LOGIN FETCH TO API

const signupWithApi = async (firstName = '', lastName = '') => {
  try {
    const token = await getCurrentUserToken();

    const authHeader = `Bearer ${token}`;

    const response = await fetch(
      `${process.env.REACT_APP_NODE_SERVER}/account/signup`,
      {
        headers: {
          Authorization: authHeader,
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ firstName, lastName })
      }
    );
    if (!response.ok) {
      throw new Error('Failed');
    }
    const apiUser = response.json().then((data) => data.data);
    return apiUser;
  } catch (e) {
    // in error case, delete fb user.
    deleteCurrentUser();
    throw new Error('Failed fetching resources to API');
  }
};

const loginWithApi = async () => {
  try {
    const token = await getCurrentUserToken();

    const authHeader = `Bearer ${token}`;

    const response = await fetch(
      `${process.env.REACT_APP_NODE_SERVER}/account/login`,
      {
        headers: {
          Authorization: authHeader,
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    );
    if (!response.ok) {
      throw new Error('Failed');
    }
    const apiUser = response.json().then((data) => data.data);
    return apiUser;
  } catch (e) {
    throw new Error('Failed fetching resources to API');
  }
};

export default { signupWithApi, loginWithApi };
