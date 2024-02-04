import React, { useContext } from 'react';
import { ModalContext } from '../util/context/ModalContext';

const Modal = () => {
  const { handleModalClose, modalContent } = useContext(ModalContext);
  const scrollY = window.scrollY;

  return (
    <div 
      className="absolute left-0 w-screen h-screen flex justify-center items-center backdrop-filter backdrop-blur-lg"
      style={{ marginTop: `${scrollY}px` }}
      onClick={ handleModalClose }
    >
      <div
        className="bg-white p-8 rounded-lg gap-4" 
        onClick={ (e) => e.stopPropagation() }
      >
        { modalContent }
      </div>
    </div>
  );
};

export default Modal;