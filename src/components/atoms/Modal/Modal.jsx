/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import './Modal.scss';

function Modal({ children, title, setShow }) {
  return (
    <div
      role="button"
      onKeyPress={(e) => (e.key === 'Escape' ? setShow(false) : null)}
      onClick={() => {
        setShow(false);
      }}
      className="modal"
    >
      <div
        className="modalContent"
        role="button"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modalHeader">
          <h3>{title}</h3>
          <button type="button" onClick={() => setShow(false)}>
            Close modal
          </button>
        </div>
        <div className="modalBody">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
