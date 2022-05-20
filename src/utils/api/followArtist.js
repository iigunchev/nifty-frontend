import { getCurrentUserToken } from '../../services/auth/auth';
import fetchApi from './fetchApi';

const followArtist = async (id, follow = true) => {
  try {
    const token = await getCurrentUserToken();
    const URL = follow ? `/account/follow/${id}` : `/account/unfollow/${id}`;

    await fetchApi(URL, `Bearer ${token}`, null, 'PUT');
  } catch (e) {
    throw Error('Failed to fetch API');
  }
};

export default followArtist;
