import { getCurrentUserToken } from '../../services/auth/auth';
import { uploadToCloudinaryWithProgress } from '../cloudinary/uploadToCloudinary';
import fetchApi from './fetchApi';

const setPlaylist = async (
  formValues,
  options = {
    method: 'POST',
    url: '/playlist'
  }
) => {
  try {
    const token = await getCurrentUserToken();

    if (!formValues.image) {
      return await fetchApi(
        options.url,
        `Bearer ${token}`,
        formValues,
        options.method
      );
    }
    // upload playlist image to cloudinary
    const formData = new FormData();
    formData.append('file', formValues.image);
    formData.append('upload_preset', 'playlist-image');
    const { url: thumbnail } = await uploadToCloudinaryWithProgress(
      'image',
      formData
    );
    return await fetchApi(
      options.url,
      `Bearer ${token}`,
      { ...formValues, thumbnail },
      'POST'
    );
  } catch (e) {
    throw new Error('Failed to fetch to API');
  }
};

export const followPlaylist = async (id, follow = true) => {
  const token = await getCurrentUserToken();
  const URL = follow ? `/playlist/follow/${id}` : `/playlist/unfollow/${id}`;
  await fetchApi(URL, `Bearer ${token}`, null, 'PUT');
};

export default setPlaylist;
