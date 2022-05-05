import React from 'react';
import './PlayerControllers.scss';
// redux
import { useSelector } from 'react-redux';
// img
import play from '../../../assets/img/player/play.png';
import pause from '../../../assets/img/player/pause.png';
import next from '../../../assets/img/player/next.png';
import previous from '../../../assets/img/player/previous.png';
import random from '../../../assets/img/player/random.png';
// components
import VolumeButton from '../VolumeButton/VolumeButton';

function PlayerControllers({ isPlaying, setIsPlaying }) {
  const { track } = useSelector((state) => state.audio);

  const playPauseTrack = () => {
    setIsPlaying(!isPlaying);
    return !isPlaying ? track.play() : track.pause();
  };

  return (
    <div className="playbackButtonsWrapper">
      <div className="alterControllers">
        <button type="button">
          <img className="filteredImg" src={random} alt="random" />
        </button>
      </div>
      <div className="primaryControllersWrapper">
        <button className="nextPreviousButton" type="button">
          <img className="filteredImg" src={previous} alt="previous" />
        </button>
        <button
          onClick={playPauseTrack}
          className="playStopButton"
          type="button"
        >
          <img
            className="filteredImg"
            src={isPlaying ? pause : play}
            alt="stop"
          />
        </button>
        <button className="nextPreviousButton" type="button">
          <img className="filteredImg" src={next} alt="next" />
        </button>
      </div>
      <VolumeButton track={track} />
    </div>
  );
}

export default PlayerControllers;
