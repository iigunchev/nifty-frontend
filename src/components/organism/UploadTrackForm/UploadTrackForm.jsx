import React, { useState } from 'react';
// components
import { toast } from 'react-toastify';
import UploadZone from '../../molecules/UploadZone/UploadZone';
import ProgressBar from '../../molecules/ProgressBar/ProgressBar';
// utils
import handleAuthErrors from '../../../utils/handleAuthErrors';
import getMetadata from '../../../utils/meta/getMetadata';
import { uploadToCloudinaryWithProgress } from '../../../utils/cloudinary/uploadToCloudinary';
import createTrack from '../../../utils/api/apiTrack';

function UploadTrackForm() {
  const [metadata, setMetadata] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('upload_preset', 'track-upload');
      const cloudFiles = {
        audio: null,
        image: null
      };
      if (metadata.image) {
        formData.append('file', metadata.image);
        cloudFiles.image = await uploadToCloudinaryWithProgress(
          'image',
          formData
        );
      }
      formData.append('file', metadata.file);
      cloudFiles.audio = await uploadToCloudinaryWithProgress(
        'video',
        formData,
        setProgress
      );

      const mock = {
        title: 'Privacy',
        genre: '62723508917a49452cc45356',
        url: cloudFiles.audio.url,
        duration: cloudFiles.audio.duration,
        thumbnail: cloudFiles.image?.url
      };
      await createTrack(mock);
      // refresh state
      setMetadata(null);
      toast.success('Song uploaded!');
    } catch (e) {
      const message = handleAuthErrors(e.message);
      toast.error(message);
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
          <img src={metadata.image} alt="hola" />

          <button type="button" onClick={handleSubmit}>
            Upload song
          </button>
          {isLoading ? <ProgressBar progress={progress} /> : null}
        </>
      ) : (
        <UploadZone handleDragFile={handleDragFile} />
      )}
    </div>
  );
}

export default UploadTrackForm;
