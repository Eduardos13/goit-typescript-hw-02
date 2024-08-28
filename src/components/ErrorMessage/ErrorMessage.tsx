import React from "react";
import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => (
  <div className={s.ErrorMessage}>
    <p>{message}</p>
  </div>
);

export default ErrorMessage;
