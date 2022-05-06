import React from 'react';
import './ProgressBar.scss';

function ProgressBar({ progress }) {
  return (
    <div className="progressBarWrapper">
      <h1>Uploading song...</h1>
      <div className="progressbarContainer">
        <div className="progressbarComplete" style={{ width: `${progress}%` }}>
          <div className="progressbarLiquid" />
        </div>
        <span className="progress">{progress}%</span>
      </div>
    </div>
  );
}

export default ProgressBar;
