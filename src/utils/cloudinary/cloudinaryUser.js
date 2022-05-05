const uploadNewAvatarImage = async (fileType, data) => {
  try {
    const imageData = await fetch(
      `https://api.cloudinary.com/v1_1/devhubnifty/${fileType}/upload`,
      {
        method: 'POST',
        body: data
      }
    ).then((response) => {
      if (!response.ok)
        throw new Error('Server error. Please try again later.');
      return response.json();
    });
    return imageData;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default uploadNewAvatarImage;
