import React from 'react';
import './PlaybackBar.scss';

function PlaybackBar({ time, duration }) {
  function secondsToMinutes(e = 0) {
    const m = Math.floor((e % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const s = Math.floor(e % 60)
      .toString()
      .padStart(2, '0');

    return `${m}:${s}`;
  }
  return (
    <div className="playbackBarWrapper">
      <span className="time timeLeft">{secondsToMinutes(time)}</span>
      <input type="range" />
      <span className="time timeTotal">{secondsToMinutes(duration)}</span>
    </div>
  );
}

export default PlaybackBar;
