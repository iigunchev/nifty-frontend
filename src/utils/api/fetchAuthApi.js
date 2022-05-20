import {
  deleteCurrentUser,
  getCurrentUserFullName,
  getCurrentUserToken
} from '../../services/auth/auth';
import fetchApi from './fetchApi';

//* SIGN UP FETCH AND LOGIN FETCH TO API

const signUpWithGoogle = async () => {
  try {
    const firstName = getCurrentUserFullName();
    const token = await getCurrentUserToken();
    const authToken = `Bearer ${token}`;
    const URL = '/account/signUpWithProvider';
    return await fetchApi(URL, authToken, { firstName }, 'POST');
  } catch (e) {
    // in error case, delete fb user.
    deleteCurrentUser();
    throw new Error('Failed fetching resources to API');
  }
};

const signupWithApi = async (firstName, lastName) => {
  try {
    const token = await getCurrentUserToken();

    const authToken = `Bearer ${token}`;
    const URL = '/account/signup';

    return await fetchApi(URL, authToken, { firstName, lastName }, 'POST');
  } catch (e) {
    // in error case, delete fb user.
    deleteCurrentUser();
    throw new Error('Failed fetching resources to API');
  }
};

const loginWithApi = async () => {
  try {
    const token = await getCurrentUserToken();

    const authToken = `Bearer ${token}`;

    const URL = '/account';

    const apiUser = await fetchApi(URL, authToken);

    return apiUser;
  } catch (e) {
    throw new Error('Failed fetching resources to API');
  }
};

export default { signupWithApi, loginWithApi, signUpWithGoogle };
