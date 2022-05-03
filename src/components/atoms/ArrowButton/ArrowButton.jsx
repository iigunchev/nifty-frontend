import React, { useState } from 'react';
import './ArrowButton.scss';
// icons
import arrowUp from '../../../assets/svg/arrow-up.svg';
import arrowDown from '../../../assets/svg/arrow-down.svg';

function ArrowButton({ handleClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonHandler = () => {
    setIsOpen(!isOpen);
    handleClick();
  };
  return (
    <button onClick={buttonHandler} className="arrowButton" type="button">
      <img src={isOpen ? arrowUp : arrowDown} alt="arrow" />
    </button>
  );
}

export default ArrowButton;
