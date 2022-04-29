import React from 'react';

import './ButtonSubmit.scss';

function ButtonSubmit({ children }) {
  return (
    <button className="buttonSubmit" type="submit" label="button">
      {children}
    </button>
  );
}

export default ButtonSubmit;
