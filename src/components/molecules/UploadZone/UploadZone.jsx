/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import Dropzone from 'react-dropzone';

import Button from '../Button/Button';
// styles
import './UploadZone.scss';

function UploadZone({ handleDragFile }) {
  const [uploadState, setUploadState] = useState(
    'Drag and drop some files here, or click to select files '
  );

  return (
    <Dropzone
      onDropAccepted={handleDragFile}
      onDropRejected={(file) => setUploadState(file[0].errors[0].message)}
      accept={{ 'audio/*': ['.mp3', '.mpeg'] }}
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <div className="dragArea" {...getRootProps()}>
            <p>{uploadState}</p>
            <div className="btnWrapper">
              <Button className="uploadButton">
                Upload files here
                <input {...getInputProps()} visibility="hidden" />
              </Button>
            </div>
          </div>
        </section>
      )}
    </Dropzone>
  );
}

export default UploadZone;
