import React, { FC } from 'react';
import s from './ErrorMessage.module.css';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => (
  <div className={s.ErrorMessage}>
    <p>{message}</p>
  </div>
);

export default ErrorMessage;
