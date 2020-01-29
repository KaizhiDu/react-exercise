import React, { useState } from "react";
import Modal from "./Modal.component";

const Homework7 = () => {

  const [showModal, setShowModal] = useState(false);

  const handleCancelClick = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={()=>setShowModal(!showModal)}>Trigger Modal</button>
      {showModal&&(<Modal handleCancelClick={handleCancelClick} content="This is Modal" buttonText="submit" cancelButtonText="cancel"/>)}
    </div>

  )
};

export default Homework7;