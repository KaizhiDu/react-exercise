import React from "react";
import './Modal.styles.css'

const Modal = ({handleCancelClick, buttonText, cancelButtonText, content}) => {
  return (
    <div className='Modal'>
      <h1>{content}</h1>
      <button>{buttonText}</button>
      <button onClick={handleCancelClick}>{cancelButtonText}</button>
    </div>
  );
};

export default Modal;