/* eslint-disable jsx-a11y/click-events-have-key-events */
import Avvvatars from 'avvvatars-react';
import React from 'react';

// loader
import { Ping } from '@uiball/loaders';

import './TrendingItem.scss';
import { useSelector } from 'react-redux';

function TrendingItem({ image = null, title, description, handleClick, id }) {
  const { isActive, currentTrack } = useSelector((state) => state.audio);
  return (
    <div
      onClick={() => handleClick(id)}
      tabIndex={0}
      role="button"
      className="trendingItemContainer"
    >
      {image ? (
        <>
          <img src={image} alt={`${title}`} className="trendingItemImg" />
          {isActive && currentTrack.title === title && (
            <div className="playingTrackItem">
              <Ping size={50} />
            </div>
          )}
        </>
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
        </div>
      </div>
    </div>
  );
}

export default TrendingItem;
