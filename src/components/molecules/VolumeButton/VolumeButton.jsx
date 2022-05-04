import React, { useState } from 'react';
import './VolumeButton.scss';
// icon
import volume from '../../../assets/svg/volume.svg';
import volumeFilled from '../../../assets/svg/volumeFilled.svg';
import volumeOff from '../../../assets/svg/volumeOff.svg';

function VolumeButton({ audio }) {
  const [isBarVisible, setIsBarVisible] = useState();

  return (
    <div
      className="volumeWrapper"
      onMouseOver={() => setIsBarVisible(true)}
      onFocus={() => setIsBarVisible(true)}
      onMouseOut={() => setIsBarVisible(false)}
      onBlur={() => setIsBarVisible(false)}
    >
      <input
        className={isBarVisible ? 'volumeRange' : 'volumeRange notVisible'}
        type="range"
        orient="vertical"
      />

      {audio.volume !== 0 ? (
        <button className="volumeButton" type="button">
          <img src={isBarVisible ? volumeFilled : volume} alt="volume" />
        </button>
      ) : (
        <button type="button" className="volumeButton">
          <img src={volumeOff} alt="volume" />
        </button>
      )}
    </div>
  );
}

export default VolumeButton;
