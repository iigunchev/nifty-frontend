import React, { useState } from 'react';
// components
import { toast } from 'react-toastify';
import UploadZone from '../../molecules/UploadZone/UploadZone';
import ProgressBar from '../../molecules/ProgressBar/ProgressBar';
// utils
import handleAuthErrors from '../../../utils/handleAuthErrors';
import getMetadata from '../../../utils/meta/getMetadata';
import { uploadTrackAndImageToCloudinary } from '../../../utils/cloudinary/uploadToCloudinary';
import createTrack from '../../../utils/api/apiTrack';

function UploadTrackForm() {
  const [metadata, setMetadata] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const { image, audio } = await uploadTrackAndImageToCloudinary(
        {
          audio: metadata.file,
          image: metadata.image
        },
        setProgress
      );

      const mock = {
        title: 'Privacy',
        genre: '62723508917a49452cc45356',
        url: audio.url,
        duration: audio.duration,
        thumbnail: image || null
      };
      await createTrack(mock);
      // refresh state
      setMetadata(null);
      toast.success('Song uploaded!');
    } catch (e) {
      console.log(e.message);
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
