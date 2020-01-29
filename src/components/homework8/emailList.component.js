import React from "react";

const EmailList = ({handleDetailClick, emailDatas, filter}) => {
  return (
    <ur>
      {emailDatas.filter(email => email.tag === filter).map((email, idx) => {
        return <li onClick={() => handleDetailClick(email, idx)}>
          {email.subject}
          <br/>
          <span style={{float: "right"}}>{email.time}</span>
          <br/>
          <hr/>
        </li>;
      })}
    </ur>
  );
};

export default EmailList;