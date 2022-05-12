import React from 'react';

import './PlaylistItem.scss';
// icons
import defaultImage from '../../../assets/img/defaultSong.png';
import play from '../../../assets/img/player/play.png';
import song from '../../../assets/svg/asideSvg/genresFilled.svg';

function PlaylistItem({ name, tracksLength, image }) {
  return (
    <div className="playListItemContainer">
      <img
        src={image || defaultImage}
        className="playlistImage"
        alt="playlistBackground"
      />
      <div className="playListBottomContainer">
        <div className="detailsWrapper">
          <span className="detailTitle">{name}</span>
          <div className="detailDescription">
            <img src={song} alt="song" className="playlistSongIcon" />
            <span>{tracksLength} tracks</span>
          </div>
        </div>
        <button type="button" className="playListActionButton">
          <img className="filteredImg" src={play} alt="play" />
        </button>
      </div>
    </div>
  );
}

export default PlaylistItem;
