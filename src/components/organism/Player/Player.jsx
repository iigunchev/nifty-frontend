import React from 'react';
// redux
import { useSelector } from 'react-redux';

import './Player.scss';
import './Player-vanilla.scss';
import TrackInfo from '../../molecules/TrackInfo/TrackInfo';
import VolumeButton from '../../molecules/VolumeButton/VolumeButton';

import AudioControls from '../../molecules/AudioControls/AudioControls';

function Player() {
  const audio = useSelector((state) => state.audio);

  return (
    <section className="playerContainer">
      <div className="playerWrapper">
        <TrackInfo
          title="Motomami"
          artist="La Rosalia"
          songImage="https://via.placeholder.com/70x70"
        />
        <AudioControls />
        <VolumeButton track={audio.track} />
      </div>
    </section>
  );
}

export default Player;
