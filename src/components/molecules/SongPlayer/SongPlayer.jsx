import React from 'react';
import './SongPlayer.scss';

function SongPlayer({ title, artist, songImage }) {
  return (
    <div className="songPlayerWrapper">
      <img className="songPlayerImage" src={songImage} alt="song" />
      <div className="songPlayerInfo">
        <h3 className="songPlayerTitle">{title}</h3>
        <span className="songPlayerArtist">{artist}</span>
      </div>
    </div>
  );
}

export default SongPlayer;
