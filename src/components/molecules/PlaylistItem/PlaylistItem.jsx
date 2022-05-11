import React from 'react';

import './PlaylistItem.scss';
import play from '../../../assets/img/player/play.png';

function PlaylistItem() {
  return (
    <div className="playlistItemContainer">
      <div className="container">
        <div className="detailwrapper">
          <span className="detailsTitle">titulo</span>
          <div className="detailsDescription">
            <span>12 tracks</span>
          </div>
        </div>
        <div className="buttoncontainer">
          <img className="filteredImg" src={play} alt="play" />
        </div>
      </div>
    </div>
  );
}

export default PlaylistItem;
