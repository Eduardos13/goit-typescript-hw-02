import React, { FC } from 'react';
import s from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => (
  <div className={s.LoadMoreWrapper}>
    <button className={s.LoadMoreBtn} onClick={onClick}>
      Load more...
    </button>
  </div>
);

export default LoadMoreBtn;
