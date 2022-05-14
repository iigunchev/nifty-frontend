/* eslint-disable jsx-a11y/click-events-have-key-events */
import Avvvatars from 'avvvatars-react';
import React from 'react';

import './TrendingItem.scss';

function TrendingItem({ image = null, title, description, handleClick, id }) {
  return (
    <div
      onClick={() => handleClick(id)}
      tabIndex={0}
      role="button"
      className="trendingItemContainer"
    >
      {image ? (
        <img src={image} alt={`${title}`} className="trendingItemImg" />
      ) : (
        <div className="trendingItemImg">
          <Avvvatars size={50} radius={12} value={title} />
        </div>
      )}

      <div
        onClick={(e) => e.stopPropagation()}
        role="button"
        tabIndex={0}
        className="detailsWrapper"
      >
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
