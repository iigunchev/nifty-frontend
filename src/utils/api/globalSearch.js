import { getCurrentUserToken } from '../../services/auth/auth';
import fetchApi from './fetchApi';

const globalSearch = async (query) => {
  try {
    const token = await getCurrentUserToken();
    return await fetchApi(
      `/search/all/${query}`,
      `Bearer ${token}`,
      null,
      'GET'
    );
  } catch (e) {
    throw Error('Failed to fetch API');
  }
};

export default globalSearch;
