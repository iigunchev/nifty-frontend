import { getCurrentUserToken } from '../../services/auth/auth';
import fetchApi from './fetchApi';

const getGenresFromApi = async () => {
  try {
    const token = await getCurrentUserToken();
    const genres = await fetchApi('/genres', `Bearer ${token}`, 'GET');
    return genres;
  } catch (e) {
    throw Error('Failed to fetch API');
  }
};

export default getGenresFromApi;
