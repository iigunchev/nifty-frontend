import {
  deleteCurrentUser,
  getCurrentUserFullName,
  getCurrentUserToken
} from '../services/auth/auth';

//* SIGN UP FETCH AND LOGIN FETCH TO API

const signupWithApi = async (
  firstName = getCurrentUserFullName(),
  lastName = null
) => {
  try {
    const token = await getCurrentUserToken();

    const authHeader = `Bearer ${token}`;
    const URL = lastName
      ? `${process.env.REACT_APP_NODE_SERVER}/account/signup`
      : `${process.env.REACT_APP_NODE_SERVER}/account/signUpWithProvider`;
    const response = await fetch(URL, {
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: lastName
        ? JSON.stringify({ firstName, lastName })
        : JSON.stringify({ firstName })
    });
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
