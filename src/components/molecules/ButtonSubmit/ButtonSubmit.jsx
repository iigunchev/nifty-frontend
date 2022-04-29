import React from 'react';

import './ButtonSubmit.scss';

function ButtonSubmit({ children, size }) {
  return (
    <button
      className="buttonSubmit"
      type="submit"
      label="button"
      style={{ width: size }}
    >
      {children}
    </button>
  );
}

export default ButtonSubmit;
