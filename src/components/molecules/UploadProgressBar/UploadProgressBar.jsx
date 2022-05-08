import React from 'react';
// styles
import './UploadProgressBar.scss';

function UploadProgressBar({ progress }) {
  return (
    <div className="uploadBarWrapper">
      <h1>Uploading song...</h1>
      <div className="uploadBarContainer">
        <div className="uploadBarComplete" style={{ width: `${progress}%` }}>
          <div className="uploadBarLiquid" />
        </div>
        <span className="progress">{progress}%</span>
      </div>
    </div>
  );
}

export default UploadProgressBar;
