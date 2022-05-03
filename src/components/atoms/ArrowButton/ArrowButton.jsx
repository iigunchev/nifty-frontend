import React, { useState } from 'react';
import './ArrowButton.scss';
// icons
import arrowUp from '../../../assets/svg/arrow-up.svg';
import arrowDown from '../../../assets/svg/arrow-down.svg';

function ArrowButton({ handleClick, children, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonHandler = () => {
    setIsOpen(!isOpen);
    handleClick();
  };
  return (
    <button
      onClick={buttonHandler}
      className={`${className} arrowButton`}
      type="button"
    >
      {children}
      <img src={isOpen ? arrowUp : arrowDown} alt="arrow" />
    </button>
  );
}

export default ArrowButton;
