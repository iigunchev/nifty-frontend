import { getCurrentUserToken } from '../services/auth/auth';
import fetchApi from './fetchApi';

const fetchEditProfile = async (values, id) => {
  try {
    const token = await getCurrentUserToken();
    const authToken = `Bearer ${token}`;
    const URL = `/account/${id}`;
    console.log(values);
    const apiUser = await fetchApi(URL, authToken, values, 'PUT');
    return apiUser;
  } catch (e) {
    throw Error('Something went wrong in API');
  }
};

const fetchChangePassword = () => {};

export default {
  fetchEditProfile,
  fetchChangePassword
};
