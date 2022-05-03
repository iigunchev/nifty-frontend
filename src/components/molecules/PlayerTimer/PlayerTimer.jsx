import React from 'react';
import './PlayerTimer.scss';

function PlayerTimer() {
  return (
    <div className="playerTimerWrapper">
      <span className="time timeLeft">00:00</span>
      <input type="range" />
      <span className="time timeTotal">00:00</span>
    </div>
  );
}

export default PlayerTimer;
