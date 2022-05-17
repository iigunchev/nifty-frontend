import React, { useEffect, useState } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentTrack,
  setTrackPosition,
  setIsActive
} from '../../../redux/Audio/audioSlice';
// utils
import { calculateTime } from '../../../utils/audioPlayer';
// images
import play from '../../../assets/img/player/play.png';
import pause from '../../../assets/img/player/pause.png';
import next from '../../../assets/img/player/next.png';
import previous from '../../../assets/img/player/previous.png';
// styles
import './AudioControls.scss';
import useAudioControllers from '../../../hooks/useAudioControllers';

function AudioControls() {
  const dispatch = useDispatch();
  // redux volume slice
  const { currentTrack, volume, queue, isActive } = useSelector(
    (state) => state.audio
  );

  // custom hook
  const [audioPlayer, progressBar, animationRef, duration] =
    useAudioControllers(volume);
  // states
  const [currentTime, setCurrentTime] = useState(0);
  // detect refresh page
  // const [isRefreshed, setIsRefreshed] = useState(!!currentTrack);
  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      '--seek-before-width',
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };
  // handle pause or play the song
  const togglePlayPause = () => {
    if (!currentTrack.src) return;
    if (!isActive) {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    } else {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  };

  // Modifies the audio current time based on the user interaction with the range input
  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const playPrevSong = () => {
    if (currentTrack.queuePosition === 0) return;

    dispatch(setCurrentTrack(queue[currentTrack.queuePosition - 1]));
  };

  const playNextSong = () => {
    if (!currentTrack.src) return;
    if (currentTrack.queuePosition === queue.length - 1) return;
    dispatch(setCurrentTrack(queue[currentTrack.queuePosition + 1]));
  };

  const onEndedSong = () => {
    if (queue.length === 0) {
      dispatch(setIsActive(false));
      return;
    }
    playNextSong();
  };

  useEffect(() => {
    togglePlayPause();
  }, [isActive]);

  useEffect(() => {
    if (!currentTrack.src) return;
    // checks if page have been refreshed, to don't pass in useEffect
    // if (isRefreshed) {
    //   setIsRefreshed(false);
    //   return;
    // }
    dispatch(setTrackPosition());
    audioPlayer.current.play();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }, [currentTrack.src]);

  return (
    <div className="primaryControlsWrapper">
      <audio onEnded={onEndedSong} ref={audioPlayer} src={currentTrack.src}>
        <track kind="captions" />
      </audio>
      <div className="controlButtonsWrapper">
        {/* Previous song button */}
        <button
          onClick={playPrevSong}
          className="nextPreviousButton"
          type="button"
        >
          <img className="filteredImg" src={previous} alt="previous" />
        </button>
        {/* Play / Pause button */}
        <button
          onClick={() => dispatch(setIsActive(!isActive))}
          className="playStopButton"
          type="button"
        >
          <img
            className="filteredImg"
            src={isActive ? pause : play}
            alt="stop"
          />
        </button>
        {/* Next song button */}
        <button
          onClick={playNextSong}
          className="nextPreviousButton"
          type="button"
        >
          <img className="filteredImg" src={next} alt="next" />
        </button>
      </div>
      <div className="progressBarWrapper">
        {/* current time */}
        <div className="currentTime">{calculateTime(currentTime)}</div>
        {/* progress bar */}
        <div className="progressInputContainer">
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
