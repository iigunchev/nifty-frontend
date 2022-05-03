import React from 'react';
import './PlayerControllers.scss';
// img
import { useSelector, useDispatch } from 'react-redux';
import play from '../../../assets/img/player/play.png';
import pause from '../../../assets/img/player/pause.png';
import next from '../../../assets/img/player/next.png';
import previous from '../../../assets/img/player/previous.png';
import { setSong } from '../../../redux/Song/songSlice';

import purpurina from '../../../assets/songsTest/purpurina.mp3';

function PlayerControllers() {
  const dispatch = useDispatch();
  const song = useSelector((state) => state.song);

  return (
    <div className="playbackButtonsWrapper">
      <button className="nextPreviousButton" type="button">
        <img src={previous} alt="previous" />
      </button>
      {!song.isPlaying ? (
        <button
          onClick={() => {
            console.log('hola?');
            song?.pause();
          }}
          className="playStopButton"
          type="button"
        >
          <img src={pause} alt="stop" />
        </button>
      ) : (
        <button
          onClick={() => {
            console.log(song.audio);
            song.audio?.play();
          }}
          className="playStopButton"
          type="button"
        >
          <img src={play} alt="play" />
        </button>
      )}
      <button
        onClick={() => dispatch(setSong(purpurina))}
        className="nextPreviousButton"
        type="button"
      >
        <img src={next} alt="next" />
      </button>
    </div>
  );
}

export default PlayerControllers;
