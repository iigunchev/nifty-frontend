import React from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { setIsActive } from '../../../redux/Audio/audioSlice';
// styles
import './ButtonWithIcon.scss';
// icons
import { ReactComponent as PlaySVG } from '../../../assets/svg/play.svg';
import { ReactComponent as StopSVG } from '../../../assets/svg/stop.svg';

function ButtonWithIcon({ handlePlayTrack, trackSrc }) {
  const dispatch = useDispatch();
  const { isActive, currentTrack } = useSelector((state) => state.audio);
  const handlePlayPause = () => {
    // if is the same song doesn't change

    if (trackSrc === currentTrack.src) {
      dispatch(setIsActive(!isActive));
    } else handlePlayTrack();
  };
  return (
    <div className="playButtonWrapper">
      <button
        onClick={handlePlayPause}
        type="button"
        className="buttonWithIcon"
      >
        {isActive && currentTrack.src === trackSrc ? (
          <StopSVG className="icon" />
        ) : (
          <PlaySVG className="icon" />
        )}
      </button>
    </div>
  );
}

export default ButtonWithIcon;
