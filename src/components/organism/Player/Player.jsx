import React from 'react';
// redux
import { useSelector } from 'react-redux';
// components
import TrackInfo from '../../molecules/TrackInfo/TrackInfo';
import VolumeButton from '../../molecules/VolumeButton/VolumeButton';
import AudioControls from '../../molecules/AudioControls/AudioControls';
// styles
import './Player.scss';
import './Player-vanilla.scss';

function Player() {
  const audio = useSelector((state) => state.audio);

  return (
    <section className="playerContainer">
      <div className="playerWrapper">
        <TrackInfo
          title={audio.title}
          artist={audio.artist}
          songImage={audio.image}
        />
        <AudioControls />
        <VolumeButton track={audio.track} />
      </div>
    </section>
  );
}

export default Player;
