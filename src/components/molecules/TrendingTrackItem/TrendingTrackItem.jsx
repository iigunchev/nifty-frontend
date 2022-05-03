import React from 'react';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';

import './TrendingTrackItem.scss';
import { ReactComponent as SVG } from '../../../assets/svg/verticalDots.svg';
import TrendingItem from '../TrendingItem/TrendingItem';

function TrendingTrackItem({ artistImg, trackName, artistName }) {
  return (
    <div className="trendingTrackItemContainer">
      {/* <span className="trendingSpot">{spot}</span> */}
      <TrendingItem
        image={artistImg}
        title={trackName}
        description={artistName}
      />
      {/* <span>{trackDuration}</span> */}
      <ButtonWithIcon />
      <button type="button" title="More options">
        <SVG className="verticalDots" />
      </button>
    </div>
  );
}

export default TrendingTrackItem;
