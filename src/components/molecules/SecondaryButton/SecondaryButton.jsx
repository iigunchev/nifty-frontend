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
    width: '100%'
  }
};
function SecondaryButton({
  disabled,
  handleClick,
  children,
  className,
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
