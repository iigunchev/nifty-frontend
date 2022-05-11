import React from 'react';

// styles
import './ButtonWithIcon.scss';
// icons
import { ReactComponent as PlaySVG } from '../../../assets/svg/play.svg';
// import { ReactComponent as StopSVG } from '../../../assets/svg/stop.svg';

function ButtonWithIcon({ handleClick }) {
  return (
    <div className="playButtonWrapper">
      <button onClick={handleClick} type="button" className="buttonWithIcon">
        <PlaySVG className="icon" />
      </button>
    </div>
  );
}

export default ButtonWithIcon;
