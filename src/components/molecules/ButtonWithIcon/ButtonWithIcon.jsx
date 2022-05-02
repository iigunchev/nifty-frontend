import React from 'react';

import './ButtonWithIcon.scss';
import { ReactComponent as SVG } from '../../../assets/svg/play.svg';

function ButtonWithIcon() {
  return (
    <div className="playButtonWrapper">
      <button type="button" className="buttonWithIcon">
        <SVG className="icon" />
      </button>
    </div>
  );
}

export default ButtonWithIcon;
