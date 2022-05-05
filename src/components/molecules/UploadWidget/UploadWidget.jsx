/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import Dropzone from 'react-dropzone';
// styles
import './UploadWidget.scss';

function UploadWidget() {
  // const fileTypes = ['mp3', 'mp4'];
  // const [showForm, setShowForm] = useState(false);
  const onDrop = (element) => {
    console.log(element);
    // setShowForm(true);
  };
  return (
    <Dropzone onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag and drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
}

export default UploadWidget;
