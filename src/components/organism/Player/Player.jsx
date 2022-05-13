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
  const { currentTrack } = useSelector((state) => state.audio);
  console.log(currentTrack);
  return (
    <section className="playerContainer">
      <div className="playerWrapper">
        <TrackInfo
          title={currentTrack.title}
          artist={currentTrack.artist}
          songImage={currentTrack.image}
        />
        <AudioControls />
        <VolumeButton />
      </div>
    </section>
  );
}

export default Player;
