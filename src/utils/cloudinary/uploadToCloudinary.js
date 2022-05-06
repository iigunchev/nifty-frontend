import axios from 'axios';

const uploadToCloudinary = async (fileType, data) => {
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/devhubnifty/${fileType}/upload`,
      {
        method: 'POST',
        body: data
      }
    );
    if (!response.ok) throw new Error('Server error. Please try again later.');
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const uploadToCloudinaryWithProgress = async (
  fileType,
  data,
  setProgress = null
) => {
  try {
    const response = await axios.request({
      method: 'post',
      url: `https://api.cloudinary.com/v1_1/devhubnifty/${fileType}/upload`,
      data,
      onUploadProgress: setProgress
        ? (p) => {
            const percent = Math.round((p.loaded / p.total) * 100);
            setProgress(percent);
          }
        : null
    });
    if (response.status !== 200)
      throw new Error('Server error. Please try again later.');
    return response.data;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const uploadTrackAndImageToCloudinary = async (data, setProgress) => {
  const formData = new FormData();

  const FilesWithEndpoints = [
    {
      url: `https://api.cloudinary.com/v1_1/devhubnifty/video/upload`,
      formData: data.audio
    },
    {
      url: `https://api.cloudinary.com/v1_1/devhubnifty/image/upload`,
      formData: data.image
    }
  ];
  try {
    const [responseAudio, responseImage] = await axios.all(
      FilesWithEndpoints.map((element, idx) => {
        formData.append('file', element.formData);
        formData.append('upload_preset', 'track-upload');
        return axios.request({
          method: 'post',
          url: element.url,
          data: formData,
          onUploadProgress:
            idx === 0
              ? (p) => {
                  const percent = Math.round((p.loaded / p.total) * 100);
                  setProgress(percent);
                }
              : null
        });
      })
    );
    console.log(responseAudio, responseImage);
    if (responseAudio.status !== 200 || responseImage.status !== 200) {
      throw new Error();
    }
    return { audio: responseAudio.data, image: responseImage.data.url };
  } catch (e) {
    throw new Error('Failed to upload files');
  }
};

export default uploadToCloudinary;
