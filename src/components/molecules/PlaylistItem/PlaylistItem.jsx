import React from 'react';

import './PlaylistItem.scss';
import play from '../../../assets/img/player/play.png';

function PlaylistItem() {
  return (
    <div className="playListItemContainer">
      <div className="playListBottomContainer">
        <div className="detailsWrapper">
          <span className="detailTitle">titulo</span>
          <div className="detailDescription">
            <span>12 tracks</span>
          </div>
        </div>
        <div className="playListActionButton">
          <img className="filteredImg" src={play} alt="play" />
        </div>
      </div>
    </div>
  );
}

export default PlaylistItem;
