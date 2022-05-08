import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTime } from '../../../redux/Audio/audioSlice';
import './PlaybackBar.scss';

function PlaybackBar({ time, duration }) {
  const dispatch = useDispatch();
  const audio = useSelector((state) => state.audio);
  function secondsToMinutes(e = 0) {
    const m = Math.floor((e % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const s = Math.floor(e % 60)
      .toString()
      .padStart(2, '0');

    return `${m}:${s}`;
  }

  const changeTimeBar = (e) => {
    // eslint-disable-next-line no-param-reassign
    const currentSeconds = (e.target.value / 100) * duration;
    dispatch(setCurrentTime(currentSeconds));
    console.log('cambia?');
  };
  return (
    <div className="playbackBarWrapper">
      <span className="time timeLeft">{secondsToMinutes(time)}</span>
      <input type="range" value={audio.barProgress} onChange={changeTimeBar} />
      <span className="time timeTotal">{secondsToMinutes(duration)}</span>
    </div>
  );
}

export default PlaybackBar;
