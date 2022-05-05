import React from 'react';
import './VolumeButton.scss';
// icon
import { useDispatch, useSelector } from 'react-redux';
import volumeIcon from '../../../assets/svg/volume.svg';
// import volumeFilled from '../../../assets/svg/volumeFilled.svg';
import volumeOff from '../../../assets/svg/volumeOff.svg';
import { setVolume } from '../../../redux/Audio/audioSlice';

function VolumeButton() {
  const dispatch = useDispatch();
  const { volume } = useSelector((state) => state.audio);
  const onVolumeChange = (e) => {
    const actualVolume = e.target.value / 100;
    dispatch(setVolume(actualVolume));
  };
  return (
    <div className="volumeWrapper">
      {volume !== 0 ? (
        <button className="volumeButton" type="button">
          <img src={volumeIcon} alt="volume" />
        </button>
      ) : (
        <button type="button" className="volumeButton">
          <img src={volumeOff} alt="volume" />
        </button>
      )}
      <input
        className="volumeRange"
        type="range"
        min="0"
        max="100"
        onChange={onVolumeChange}
      />
    </div>
  );
}

export default VolumeButton;
