import React from 'react';
import './PlaybackBar.scss';

function PlaybackBar() {
  return (
    <div className="playbackBarWrapper">
      <span className="time timeLeft">00:00</span>
      <input type="range" />
      <span className="time timeTotal">00:00</span>
    </div>
  );
}

export default PlaybackBar;
