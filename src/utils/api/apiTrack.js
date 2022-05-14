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

export const getTracks = async (URL) => {
  try {
    const token = await getCurrentUserToken();
    const apiTracks = await fetchApi(URL, `Bearer ${token}`);
    return apiTracks;
  } catch (e) {
    throw Error('Failed to fetch API');
  }
};

export const toggleLike = async (value, id) => {
  try {
    const token = await getCurrentUserToken();
    const URL = `/track/${value ? 'like' : 'unlike'}/${id}`;

    await fetchApi(URL, `Bearer ${token}`, null, 'PUT');
  } catch (e) {
    throw Error('Failed to fetch API');
  }
};

export const deleteTrack = async (id) => {
  try {
    const token = await getCurrentUserToken();

    const apiTrack = await fetchApi(
      `/track/${id}`,
      `Bearer ${token}`,
      null,
      'DELETE'
    );
    return apiTrack;
  } catch (e) {
    throw Error('Failed to fetch API');
  }
};

export default createTrack;
