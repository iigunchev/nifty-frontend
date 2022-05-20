import { getCurrentUserToken } from '../../services/auth/auth';
import fetchApi from './fetchApi';

const createTrack = async (values) => {
  try {
    const token = await getCurrentUserToken();

    return await fetchApi('/track', `Bearer ${token}`, values, 'POST');
  } catch (e) {
    throw Error('Failed to fetch API');
  }
};

export const getTracks = async (URL) => {
  try {
    const token = await getCurrentUserToken();
    return await fetchApi(URL, `Bearer ${token}`);
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

    return await fetchApi(`/track/${id}`, `Bearer ${token}`, null, 'DELETE');
  } catch (e) {
    throw Error('Failed to fetch API');
  }
};

export const getAllTracksById = async (tracksId) => {
  try {
    const token = await getCurrentUserToken();
    const tracks = await Promise.all(
      tracksId.map((trackId) =>
        fetchApi(`/track/${trackId}`, `Bearer ${token}`)
      )
    );
    // introduces one array each other
    return tracks.flat();
  } catch (e) {
    throw Error('Failed to fetch API');
  }
};

export const updateTrack = async (id, values) => {
  try {
    const token = await getCurrentUserToken();
    return await fetchApi(`/track/${id}`, `Bearer ${token}`, values, 'PUT');
  } catch (e) {
    throw Error('Failed to fetch API');
  }
};

export default createTrack;
