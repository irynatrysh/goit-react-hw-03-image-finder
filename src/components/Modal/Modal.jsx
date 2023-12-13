import React from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalContent, Image } from './Modal.styled'; // Імпортуємо стилі

const Modal = ({ largeImageURL, onClose }) => (
  <Overlay onClick={onClose}>
    <ModalContent>
      <Image src={largeImageURL} alt="" />
    </ModalContent>
  </Overlay>
);

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;