/* eslint-disable no-param-reassign */
/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["bar"] }] */
import React, { useState } from 'react';
import './VolumeButton.scss';
// icon
import { useDispatch, useSelector } from 'react-redux';
import volumeIcon from '../../../assets/svg/volume.svg';
import volumeFilled from '../../../assets/svg/volumeFilled.svg';
import volumeOff from '../../../assets/svg/volumeOff.svg';
import { setVolume } from '../../../redux/Audio/audioSlice';

function VolumeButton() {
  const [isBarVisible, setIsBarVisible] = useState();
  const dispatch = useDispatch();
  const { volume } = useSelector((state) => state.audio);
  const handleChangeVolume = (e) => {
    const actualVolume = e.target.value / 100;
    dispatch(setVolume(actualVolume));
  };
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
        min="0"
        max="100"
        orient="vertical"
        onChange={handleChangeVolume}
      />

      {volume !== 0 ? (
        <button className="volumeButton" type="button">
          <img src={isBarVisible ? volumeFilled : volumeIcon} alt="volume" />
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
