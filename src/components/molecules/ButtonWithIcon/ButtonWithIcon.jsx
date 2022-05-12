import React from 'react';

import './ButtonWithIcon.scss';
import { ReactComponent as SVG } from '../../../assets/svg/play.svg';

function ButtonWithIcon({ handleClick }) {
  return (
    <div className="playButtonWrapper">
      <button onClick={handleClick} type="button">
        <SVG className="icon" />
      </button>
    </div>
  );
}

export default ButtonWithIcon;
