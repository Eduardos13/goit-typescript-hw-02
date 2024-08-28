import React, { FC } from 'react';
import { TailSpin } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader: FC = () => (
  <div className={s.Loader}>
    <TailSpin color="#00BFFF" height={50} width={50} />
  </div>
);

export default Loader;
