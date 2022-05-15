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
      const newPlaylist = await fetchApi(
        options.url,
        `Bearer ${token}`,
        formValues,
        options.method
      );
      return newPlaylist;
    }
    // upload playlist image to cloudinary
    const formData = new FormData();
    formData.append('file', formValues.image);
    formData.append('upload_preset', 'playlist-image');
    const { url: thumbnail } = await uploadToCloudinaryWithProgress(
      'image',
      formData
    );
    const newPlaylist = await fetchApi(
      URL,
      `Bearer ${token}`,
      { ...formValues, thumbnail },
      'POST'
    );
    return newPlaylist;
  } catch (e) {
    throw new Error('Failed to fetch to API');
  }
};

export default setPlaylist;
