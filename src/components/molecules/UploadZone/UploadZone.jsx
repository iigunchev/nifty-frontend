/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// toast fn
import { toast } from 'react-toastify';
// components
import Dropzone from 'react-dropzone';
import Button from '../Button/Button';
// styles
import './UploadZone.scss';

function UploadZone({ handleDragFile, className }) {
  return (
    <Dropzone
      onDropAccepted={handleDragFile}
      onDropRejected={() => toast.error('Please upload files in mp3 format.')}
      accept={{ 'audio/*': ['.mp3', '.mpeg'] }}
    >
      {({ getRootProps, getInputProps }) => (
        <section className={className}>
          <div className="dragArea" {...getRootProps()}>
            <p>Drag and drop some files here, or click to select files</p>
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
