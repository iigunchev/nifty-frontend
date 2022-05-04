import React from 'react';
import './PlayerControllers.scss';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { setSong } from '../../../redux/Song/songSlice';
// img
import play from '../../../assets/img/player/play.png';
import pause from '../../../assets/img/player/pause.png';
import next from '../../../assets/img/player/next.png';
import previous from '../../../assets/img/player/previous.png';
import random from '../../../assets/img/player/random.png';
// components
import VolumeButton from '../VolumeButton/VolumeButton';

import purpurina from '../../../assets/songsTest/purpurina.mp3';

function PlayerControllers() {
  const dispatch = useDispatch();
  const song = useSelector((state) => state.song);

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
        {!song.isPlaying ? (
          <button
            onClick={() => {
              song.audio.pause();
            }}
            className="playStopButton"
            type="button"
          >
            <img className="filteredImg" src={pause} alt="stop" />
          </button>
        ) : (
          <button
            onClick={() => {
              console.log(song.audio);
              song.audio.play();
            }}
            className="playStopButton"
            type="button"
          >
            <img className="filteredImg" src={play} alt="play" />
          </button>
        )}
        <button
          onClick={() => dispatch(setSong(purpurina))}
          className="nextPreviousButton"
          type="button"
        >
          <img className="filteredImg" src={next} alt="next" />
        </button>
      </div>
      <VolumeButton audio={song.audio} />
    </div>
  );
}

export default PlayerControllers;
