import React from 'react';

import './TrendingItem.scss';

function TrendingItem({ image, title, description }) {
  return (
    <div className="trendingItemContainer">
      <img src={image} alt={`${title}`} className="trendingItemImg" />
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
