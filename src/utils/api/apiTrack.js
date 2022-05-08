import { getCurrentUserToken } from '../../services/auth/auth';
import fetchApi from './fetchApi';

const createTrack = async (values) => {
  try {
    const token = await getCurrentUserToken();
    const apiTrack = await fetchApi(
      '/track',
      `Bearer ${token}`,
      values,
      'POST'
    );
    return apiTrack;
  } catch (e) {
    throw Error('Failed to fetch API');
  }
};

export default createTrack;
