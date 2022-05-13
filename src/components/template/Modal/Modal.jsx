/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import './Modal.scss';
// icon
import closeIcon from '../../../assets/svg/crossDefault.svg';

function Modal({ children, title, setShow, showing, width }) {
  return (
    <div
      role="button"
      className={showing ? 'showModal modal' : 'modal'}
      onKeyPress={(e) => (e.key === 'Escape' ? setShow(false) : null)}
      onClick={() => {
        setShow(false);
      }}
    >
      <div
        style={width ? { minWidth: `${width}px` } : null}
        className="modalContent"
        role="button"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modalHeader">
          <h3 className="heading3">{title}</h3>
          <button
            className="closeButton"
            type="button"
            onClick={() => setShow(false)}
          >
            <img src={closeIcon} alt="close" />
          </button>
        </div>
        <div className="modalBody">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
