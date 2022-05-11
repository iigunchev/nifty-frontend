import React from 'react';
import './TrackInfo.scss';
// default song
import defaultSong from '../../../assets/img/defaultSong.png';

function TrackInfo({ title, artist, songImage }) {
  return (
    <div className="songPlayerWrapper">
      <img
        className="songPlayerImage"
        src={songImage || defaultSong}
        alt="song"
      />
      <div className="songPlayerInfo">
        <h3 className="songPlayerTitle">{title}</h3>
        <span className="songPlayerArtist">{artist}</span>
      </div>
    </div>
  );
}

export default TrackInfo;
