import { getCurrentUserToken } from '../../services/auth/auth';
import fetchApi from './fetchApi';

const follow = async (value, id) => {
  try {
    const token = await getCurrentUserToken();
    const URL = `/account/${value ? 'follow' : 'unfollow'}/${id}`;

    await fetchApi(URL, `Bearer ${token}`, null, 'PUT');
  } catch (e) {
    throw Error('Failed to fetch API');
  }
};

export default follow;
