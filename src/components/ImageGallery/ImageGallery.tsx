import React, { FC } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';
import { Image } from '../../../types';

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <div className={s.wraper}>
      <ul className={s.ImageGallery}>
        {images.map((image) => (
          <ImageCard key={image.id} image={image} onImageClick={onImageClick} />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
