const uploadNewAvatarImage = async (fileType, data) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_CLOUDINARY_URL}/${fileType}/upload`,
      {
        method: 'POST',
        body: data
      }
    );
    if (!response.ok) throw new Error('Server error. Please try again later.');
    return await response.json();
  } catch (error) {
    return new Error(error.message);
  }
};

export default uploadNewAvatarImage;
