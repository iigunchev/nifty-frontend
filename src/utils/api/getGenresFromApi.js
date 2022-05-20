import { getCurrentUserToken } from '../../services/auth/auth';
import fetchApi from './fetchApi';

const getGenresFromApi = async () => {
  try {
    const token = await getCurrentUserToken();
    return await fetchApi('/genres', `Bearer ${token}`, 'GET');
  } catch (e) {
    throw Error('Failed to fetch API');
  }
};

export default getGenresFromApi;
