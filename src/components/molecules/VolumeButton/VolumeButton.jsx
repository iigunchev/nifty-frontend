import React, { useState } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { setVolume } from '../../../redux/Audio/audioSlice';
// styles
import './VolumeButton.scss';
// icon
import volumeIcon from '../../../assets/svg/volume.svg';
import volumeOff from '../../../assets/svg/volumeOff.svg';

function VolumeButton() {
  const dispatch = useDispatch();
  const [previousVolume, setPreviousVolume] = useState(0);
  const { volume } = useSelector((state) => state.audio);

  const toggleMuteVolume = () => {
    if (volume === 0 && previousVolume === 0) {
      dispatch(setVolume(0.15));
      return;
    }
    if (volume !== 0 && previousVolume !== 0) {
      dispatch(setVolume(0));
      return;
    }
    setPreviousVolume(volume);
    dispatch(setVolume(previousVolume));
  };
  const onVolumeChange = (e) => {
    const actualVolume = e.target.value / 100;
    dispatch(setVolume(actualVolume));
  };
  return (
    <div className="volumeWrapper">
      <button onClick={toggleMuteVolume} className="volumeButton" type="button">
        <img src={volume !== 0 ? volumeIcon : volumeOff} alt="volume" />
      </button>

      <input
        className="volumeRange"
        type="range"
        value={volume * 100}
        min="0"
        max="100"
        onChange={onVolumeChange}
      />
    </div>
  );
}

export default VolumeButton;
