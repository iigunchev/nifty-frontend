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

export const progressUpload = async (fileType, data, setProgress) => {
  try {
    axios
      .request({
        method: 'post',
        url: `https://api.cloudinary.com/v1_1/devhubnifty/${fileType}/upload`,
        data,
        onUploadProgress: (p) => {
          const percent = Math.round((p.loaded / p.total) * 100);
          console.log(percent);
          setProgress(percent);
          // this.setState({
          // fileprogress: p.loaded / p.total
          // })
        }
      })
      .then((res) => console.log(res.status));
  } catch (e) {
    throw new Error(e.message);
  }
};

export default uploadToCloudinary;
