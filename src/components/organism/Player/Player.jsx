import React from 'react';
import PlayerControllers from '../../molecules/PlayerControllers/PlayerControllers';
import PlaybackBar from '../../molecules/PlaybackBar/PlaybackBar';
import TrackPlayer from '../../molecules/SongPlayer/SongPlayer';
import './Player.scss';

function Player() {
  return (
    <section className="playerContainer">
      <PlaybackBar />
      <div className="playerWrapper">
        <TrackPlayer
          title="Motomami"
          artist="La Rosalia"
          songImage="https://via.placeholder.com/50x50"
        />
        <PlayerControllers />
      </div>
    </section>
  );
}

export default Player;
