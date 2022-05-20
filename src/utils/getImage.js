import { blobToBase64 } from './meta/getMetadata';

const getImage = async (image, isFlagTrue) => {
  // Image from metadata
  if (!isFlagTrue) {
    const result = await blobToBase64(image);
    return result;
  }
  return image;
};

export default getImage;
