import React from 'react';
import PlayerControllers from '../../molecules/PlayerControllers/PlayerControllers';
import PlayerTimer from '../../molecules/PlayerTimer/PlayerTimer';
import SongPlayer from '../../molecules/SongPlayer/SongPlayer';
import './Player.scss';

function Player() {
  return (
    <section className="playerContainer">
      <PlayerTimer />
      <div className="playerWrapper">
        <SongPlayer
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
