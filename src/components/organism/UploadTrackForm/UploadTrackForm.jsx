import React, { useState } from 'react';
// components
import UploadZone from '../../molecules/UploadZone/UploadZone';
import ErrorContainer from '../../molecules/ErrorContainer/ErrorContainer';
import ProgressBar from '../../molecules/ProgressBar/ProgressBar';
// utils
import handleAuthErrors from '../../../utils/handleAuthErrors';
import getMetadata from '../../../utils/meta/getMetadata';
import { progressUpload } from '../../../utils/cloudinary/uploadToCloudinary';
import createTrack from '../../../utils/api/apiTrack';

function UploadTrackForm() {
  const [metadata, setMetadata] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', metadata.file);
      formData.append('upload_preset', 'track-upload');
      const data = await progressUpload('video', formData, setProgress);
      const mock = {
        title: 'Motopapi',
        genre: '62723508917a49452cc45356',
        url: data.url,
        duration: data.duration,
        thumbnail: metadata.image ? metadata.image : null
      };
      await createTrack(mock);
      // refresh state
      setMetadata(null);
    } catch (e) {
      const message = handleAuthErrors(e.message);
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDragFile = async (track) => {
    const trackData = await getMetadata(track[0]);
    setMetadata(trackData);
  };

  return (
    <div>
      {metadata ? (
        <>
          <button type="button" onClick={handleSubmit}>
            Upload song
          </button>
          {isLoading ? <ProgressBar progress={progress} /> : null}
          <ErrorContainer error={error} />
        </>
      ) : (
        <UploadZone handleDragFile={handleDragFile} />
      )}
    </div>
  );
}

export default UploadTrackForm;
