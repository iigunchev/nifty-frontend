import React, { useEffect, useState } from 'react';
// components
import UploadZone from '../../molecules/UploadZone/UploadZone';
import ErrorContainer from '../../molecules/ErrorContainer/ErrorContainer';
import ProgressBar from '../../molecules/ProgressBar/ProgressBar';
// utils
import handleAuthErrors from '../../../utils/handleAuthErrors';
import getMetadata from '../../../utils/meta/getMetadata';
import { progressUpload } from '../../../utils/cloudinary/uploadToCloudinary';
// import createTrack from '../../../utils/api/apiTrack';

function UploadTrackForm() {
  const [file, setFiles] = useState(null);
  const [metadata, setMetadata] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'track-upload');
      const data = await progressUpload('video', formData, setProgress);
      // const mock = {
      //   title: 'Motomami',
      //   genre: '62723508917a49452cc45356',
      //   url: data.url,
      //   duration: data.duration,
      //   thumbnail: metadata.image ? metadata.image : null
      // };
      // await createTrack(mock);
      console.log(data);
    } catch (e) {
      const message = handleAuthErrors(e.message);
      setError(message);
    }
  };
  useEffect(() => {
    if (file) {
      handleSubmit();
    }
  }, [file]);

  const handleDragFile = async (track) => {
    const trackData = await getMetadata(track[0]);
    setFiles(track[0]);
    setMetadata(trackData);
  };

  return (
    <div>
      <ErrorContainer error={error} />
      {metadata ? (
        <img src={metadata.image} alt="hola" />
      ) : (
        <UploadZone handleDragFile={handleDragFile} />
      )}
      {isLoading ? <ProgressBar progress={progress} /> : <h2>Loaded</h2>}
    </div>
  );
}

export default UploadTrackForm;
