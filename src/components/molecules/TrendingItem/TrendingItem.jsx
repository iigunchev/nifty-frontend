/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import './TrendingItem.scss';

import { Link } from 'react-router-dom';
import defaultImg from '../../../assets/img/defaultSong.png';

function TrendingItem({ image = null, title, description, handleClick }) {
  return (
    <div
      onClick={handleClick}
      tabIndex={0}
      role="button"
      className="trendingItemContainer"
    >
      <img
        src={image || defaultImg}
        alt={`${title}`}
        className="trendingItemImg"
      />
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
