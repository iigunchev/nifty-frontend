/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
// styles
import './Modal.scss';
// icon
import closeIcon from '../../../assets/svg/crossDefault.svg';
import { closeModal } from '../../../redux/Dialog/dialogSlice';

function Modal({ children, title, width }) {
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector((state) => state.dialog);
  return (
    <div
      role="button"
      tabIndex={0}
      className={isModalOpen ? 'showModal modal' : 'modal'}
      onKeyPress={(e) => (e.key === 'Escape' ? dispatch(closeModal()) : null)}
      onClick={() => {
        dispatch(closeModal());
      }}
    >
      <div
        style={width ? { minWidth: `${width}px` } : null}
        tabIndex={0}
        className="modalContent"
        role="button"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modalHeader">
          <h3 className="heading3">{title}</h3>
          <button
            className="closeButton"
            type="button"
            onClick={() => dispatch(closeModal(false))}
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
