const uploadNewAvatarImage = async (fileType, data) => {
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
    return new Error(error.message);
  }
};

export default uploadNewAvatarImage;
