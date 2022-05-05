import React, { useState } from 'react';
import UploadZone from '../../molecules/UploadZone/UploadZone';
import getMetadata from '../../../utils/meta/getMetadata';

function UploadTrackForm() {
  const [file, setFiles] = useState(null);
  const [metadata, setMetadata] = useState(null);
  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append('file', file.src);
  };

  console.log(metadata);
  const handleDragFile = async (track) => {
    const trackData = await getMetadata(track[0]);
    setMetadata(trackData);
  };

  return (
    <div>
      {metadata ? (
        <img src={metadata.image} alt="hola" />
      ) : (
        <UploadZone handleDragFile={handleDragFile} />
      )}
    </div>
  );
}

export default UploadTrackForm;
