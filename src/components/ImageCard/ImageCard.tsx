import React, { FC } from 'react';
import s from './ImageCard.module.css';
import { Image } from '../../../types';

interface ImageCardProps {
  image: Image;
  onImageClick: (image: Image) => void;
}

const ImageCard: FC<ImageCardProps> = ({ image, onImageClick }) => {
  return (
    <li className={s.ImageCard}>
      <img
        src={image.urls.small}
        alt={image.alt_description || 'Image'}
        onClick={() => onImageClick(image)}
      />
    </li>
  );
};

export default ImageCard;
