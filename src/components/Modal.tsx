import React, { useContext } from 'react';
import { ModalContext } from '../util/context/ModalContext';

function Modal(): React.JSX.Element {
  const { handleModalClose, modalContent } = useContext(ModalContext);
  const scrollY: number = window.scrollY;

  return (
    <div
      className="absolute left-0 w-screen h-screen flex justify-center items-center backdrop-filter backdrop-blur-lg animate-modal-animation"
      style={{ marginTop: `${scrollY}px` }}
      onClick={handleModalClose}
    >
      {modalContent}
    </div>
  );
};

export default Modal;