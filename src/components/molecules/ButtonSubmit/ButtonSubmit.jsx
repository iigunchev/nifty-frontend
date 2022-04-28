import React from 'react';

import './ButtonSubmit.scss';

function AuthButton({ children }) {
  return (
    <button className="loginbutton" type="submit" label="button">
      {children}
    </button>
  );
}

export default AuthButton;
