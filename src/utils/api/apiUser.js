import { getCurrentUserToken } from '../../services/auth/auth';
import fetchApi from './fetchApi';

export const updateUserProfile = async (values) => {
  try {
    const token = await getCurrentUserToken();
    const authToken = `Bearer ${token}`;
    const URL = `/account`;
    const apiUser = await fetchApi(URL, authToken, values, 'PUT');
    return apiUser;
  } catch (e) {
    throw Error('Something went wrong in API');
  }
};

export const removeUserProfile = () => {};
