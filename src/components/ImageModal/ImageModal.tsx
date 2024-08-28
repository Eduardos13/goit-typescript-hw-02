import React, { FC } from 'react';
import Modal from 'react-modal';
import s from './ImageModal.module.css';
import { RxCross2 } from 'react-icons/rx';
import { Image } from '../../../types';

interface ImageModalProps {
  image: Image;
  onClose: () => void;
}

const ImageModal: FC<ImageModalProps> = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={s.ImageModal}
      overlayClassName={s.Overlay}
    >
      <button onClick={onClose} className={s.closeBtn}>
        <RxCross2 />
      </button>
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>Likes: {image.likes}</p>
    </Modal>
  );
};

export default ImageModal;
