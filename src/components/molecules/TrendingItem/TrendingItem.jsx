import React from 'react';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';

import './TrendingItem.scss';
import { ReactComponent as SVG } from '../../../assets/svg/verticalDots.svg';

function TrendingItem() {
  return (
    <div className="trendingItemContainer">
      <span className="trendingSpot">1</span>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75VCBzmMSP6nD506JfAy8GXuuRMqese0Nr-vetjHT4wQXbPnaHL3ZkvaBePzYTCo03Pc&usqp=CAU"
        alt="rosalia nene"
      />

      <div className="detailsWrapper">
        <span className="detailsName">Motomami</span>
        <div className="detailsOthers">
          <span>Rosalia</span>
          <span>Flamenco</span>
        </div>
      </div>
      <span>3:05</span>
      <ButtonWithIcon />
      <button type="button" title="More options">
        <SVG className="verticalDots" />
      </button>
    </div>
  );
}

export default TrendingItem;
