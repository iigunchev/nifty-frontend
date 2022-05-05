import React, { useEffect, useState } from 'react';
import UploadZone from '../../molecules/UploadZone/UploadZone';
import getMetadata from '../../../utils/meta/getMetadata';
import uploadToCloudinary from '../../../utils/cloudinary/uploadToCloudinary';

function UploadTrackForm() {
  const [file, setFiles] = useState(null);
  const [metadata, setMetadata] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'track-upload');
      const data = await uploadToCloudinary('video', formData);
      console.log(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (file) {
      handleSubmit();
    }
  }, [file]);
  console.log(file);
  console.log(metadata);
  const handleDragFile = async (track) => {
    const trackData = await getMetadata(track[0]);
    setFiles(track[0]);
    setMetadata(trackData);
  };

  return (
    <div>
      {isLoading ? <h2>Loading</h2> : <h2>Loaded</h2>}
      {metadata ? (
        <img src={metadata.image} alt="hola" />
      ) : (
        <UploadZone handleDragFile={handleDragFile} />
      )}
    </div>
  );
}

export default UploadTrackForm;
