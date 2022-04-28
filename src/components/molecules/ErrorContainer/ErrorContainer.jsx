import React from 'react';
import './ErrorMessage.scss';

function ErrorContainer({ error }) {
  return (
    error && (
      <div className="errorContainer">
        <p>{error}</p>
      </div>
    )
  );
}

export default ErrorContainer;
