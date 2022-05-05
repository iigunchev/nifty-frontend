import React, { useState } from 'react';
import UploadZone from '../../molecules/UploadZone/UploadZone';
import getMetadata from '../../../utils/meta/getMetadata';

function UploadTrackForm() {
  const [file, setFiles] = useState(null);
  console.log(file);
  const handleDragFile = async (track) => {
    const metadata = await getMetadata(track[0]);
    console.log(metadata);
    setFiles(metadata);
  };

  return (
    <div>
      {file ? 'formulari' : <UploadZone handleDragFile={handleDragFile} />}
    </div>
  );
}

export default UploadTrackForm;
