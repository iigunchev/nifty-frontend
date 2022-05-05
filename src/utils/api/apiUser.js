import { getCurrentUserToken } from '../../services/auth/auth';
import fetchApi from './fetchApi';

export const updateUserProfile = async (values, id) => {
  try {
    const token = await getCurrentUserToken();
    const authToken = `Bearer ${token}`;
    const URL = `/account/${id}`;
    const apiUser = await fetchApi(URL, authToken, values, 'PUT');
    return apiUser;
  } catch (e) {
    throw Error('Something went wrong in API');
  }
};

export const removeUserProfile = () => {};
