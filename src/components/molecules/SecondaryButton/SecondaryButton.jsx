import React from 'react';
import './SecondaryButton.scss';

const buttonSize = {
  sm: {
    width: '25%'
  },
  md: {
    width: '50%'
  },
  xl: {
    padding: '10px 10px'
  }
};
function SecondaryButton({
  disabled,
  handleClick,
  children,
  className = null,
  size = 'xl',
  type = false
}) {
  return (
    <button
      disabled={disabled}
      className={`secondaryButton ${className}`}
      onClick={handleClick}
      type={type ? 'button' : 'submit'}
      label="button"
      style={buttonSize[size]}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
