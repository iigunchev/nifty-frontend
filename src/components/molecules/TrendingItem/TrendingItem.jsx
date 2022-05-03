import React from 'react';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';

import './TrendingItem.scss';
import { ReactComponent as SVG } from '../../../assets/svg/verticalDots.svg';

function TrendingItem({ artistImg, trackName, artistName }) {
  return (
    <div className="trendingItemContainer">
      {/* <span className="trendingSpot">{spot}</span> */}
      <img src={artistImg} alt={`${artistName} ${trackName}`} />
      <div className="detailsWrapper">
        <span className="detailsName">{trackName}</span>
        <div className="detailsOthers">
          <span>{artistName}</span>
          {/* <span>Flamenco</span> */}
        </div>
      </div>
      {/* <span>{trackDuration}</span> */}
      <ButtonWithIcon />
      <button type="button" title="More options">
        <SVG className="verticalDots" />
      </button>
    </div>
  );
}

export default TrendingItem;
