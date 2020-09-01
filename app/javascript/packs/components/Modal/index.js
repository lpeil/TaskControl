import React, { useState, useEffect } from 'react';

import {
  ModalWrapper,
  ModalContent
} from './style'

const Modal = (props) => { 
  const closeModal = () => {
    props.setShow(false);
  }

  const handleModal = e => {
    e.stopPropagation()
  }

  return (
    <ModalWrapper show={props.show} onClick={closeModal}>
      <ModalContent width={props.width} onClick={handleModal}>
        {props.children}
      </ModalContent>
    </ModalWrapper>
  )
}

export default Modal;
