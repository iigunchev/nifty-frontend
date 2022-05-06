import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import './AudioControls.scss';
import { calculateTime } from '../../../utils/audioPlayer';
// img
import play from '../../../assets/img/player/play.png';
import pause from '../../../assets/img/player/pause.png';
import next from '../../../assets/img/player/next.png';
import previous from '../../../assets/img/player/previous.png';

function AudioControls() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  // references
  const audioPlayer = useRef(); // reference the audio component
  const progressBar = useRef(); // reference the progress bar
  const animationRef = useRef(); // reference the animation
  const audio = useSelector((state) => state.audio);

  function changePlayerCurrentTime() {
    progressBar.current.style.setProperty(
      '--seek-before-width',
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  }
  function whilePlaying() {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }
  const togglePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
    if (!isPlaying) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  // Modifies the audio current time based on the user interaction with the range input
  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  useEffect(() => {
    if (!audio.src) return;
    togglePlayPause();
  }, [audio?.src]);
  return (
    <div className="primaryControlsWrapper">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioPlayer} src={audio.src} />
      <div className="controlButtonsWrapper">
        <button className="nextPreviousButton" type="button">
          <img className="filteredImg" src={previous} alt="previous" />
        </button>
        <button
          onClick={togglePlayPause}
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
      <div className="progressBarWrapper">
        {/* current time */}
        <div className="currentTime">{calculateTime(currentTime)}</div>
        {/* progress bar */}
        <div>
          <input
            type="range"
            className="progressBar"
            defaultValue="0"
            ref={progressBar}
            onChange={changeRange}
          />
        </div>
        {/* duration */}
        <div className="duration">
          {/* eslint-disable-next-line no-restricted-globals */}
          {isNaN(duration) ? '00:00' : calculateTime(duration)}
        </div>
      </div>
    </div>
  );
}

export default AudioControls;
