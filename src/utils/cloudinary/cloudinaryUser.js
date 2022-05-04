const uploadNewAvatarImage = async (fileType, data) => {
  try {
    const imageData = await fetch(
      `https://api.cloudinary.com/v1_1/devhubnifty/${fileType}/upload`,
      {
        method: 'POST',
        body: data
      }
    ).then((r) => r.json());
    return imageData;
  } catch (error) {
    return error.message;
  }
};

export default uploadNewAvatarImage;
