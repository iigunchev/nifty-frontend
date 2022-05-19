import React from 'react';

import './Button.scss';
// loading state
import { Waveform } from '@uiball/loaders';

const buttonSize = {
  sm: {
    padding: '5px 5px'
  },
  md: {
    padding: '10px 20px'
  },
  xl: {
    padding: '15px 30px'
  }
};

function Button({
  children,
  handleClick,
  size = 'md',
  isLoading = null,
  type = 'button'
}) {
  return (
    <button
      disabled={isLoading}
      onClick={handleClick}
      className="button"
      // eslint-disable-next-line react/button-has-type
      type={type}
      label="button"
      style={buttonSize[size]}
    >
      {isLoading ? (
        <Waveform size={40} lineWeight={3.5} speed={1} color="white" />
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
