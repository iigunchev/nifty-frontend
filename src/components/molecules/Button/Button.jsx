import React from 'react';

import './Button.scss';
// loading state
import { Waveform } from '@uiball/loaders';

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

function Button({ children, size = 'xl', isLoading = null }) {
  return (
    <button
      disabled={isLoading}
      className="buttonSubmit"
      type="submit"
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
