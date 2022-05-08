import React from 'react';

import './TrendingItem.scss';

import defaultImg from '../../../assets/img/defaultSong.png';

function TrendingItem({ image = null, title, description }) {
  return (
    <div className="trendingItemContainer">
      <img
        src={image || defaultImg}
        alt={`${title}`}
        className="trendingItemImg"
      />
      <div className="detailsWrapper">
        <span className="detailsTitle">{title}</span>
        <div className="detailsDescription">
          <span>{description}</span>
          {/* <span>Flamenco</span> */}
        </div>
      </div>
    </div>
  );
}

export default TrendingItem;
