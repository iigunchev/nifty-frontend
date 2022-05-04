import React from 'react';
import './PlayerControllers.scss';
// img
import play from '../../../assets/img/player/play.png';
import pause from '../../../assets/img/player/pause.png';
import next from '../../../assets/img/player/next.png';
import previous from '../../../assets/img/player/previous.png';

function PlayerControllers({ isPlaying }) {
  return (
    <div className="playbackButtonsWrapper">
      <button className="nextPreviousButton" type="button">
        <img src={previous} alt="previous" />
      </button>
      <button className="playStopButton" type="button">
        {isPlaying ? (
          <img src={pause} alt="stop" />
        ) : (
          <img src={play} alt="play" />
        )}
      </button>
      <button className="nextPreviousButton" type="button">
        <img src={next} alt="next" />
      </button>
    </div>
  );
}

export default PlayerControllers;
