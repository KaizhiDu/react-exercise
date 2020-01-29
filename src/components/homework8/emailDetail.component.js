import React from "react";

const EmailDetail = ({handleDeleteClick, email: {email, idx}}) => {

  return (
    <div>
      <ul>
        <li>{email.from}</li>
        <li>{email.address}</li>
        <li>{email.time}</li>
        <li>{email.subject}</li>
        <li>{email.tag}</li>
        <li>{email.read}</li>
      </ul>
      <button onClick={() => handleDeleteClick(idx)}>delete</button>
    </div>
  );
};

export default EmailDetail;