import React, { useEffect, useState } from "react";
import axios from 'axios';
import './homework8.styles.css';
import EmailList from "./emailList.component";
import EmailDetail from "./emailDetail.component";

const Homework8 = () => {

  const [emailDatas, setEmailDatas] = useState([]);
  const [emailDetail, setEmailDetail] = useState({email: null, idx: ''});
  const [tag, setTag] = useState('inbox');

  useEffect(() => {
    axios.get('http://api.haochuan.io/emails')
         .then(res => {
           setEmailDatas(res.data.emailData);
         });
  }, []);

  const handleDetailClick = (email, idx) => {
    setEmailDetail({email, idx});
  };

  const handleDeleteClick = (idx) => {
    emailDatas.map((email, id) => {
      if (idx === id) return email.tag = 'deleted';
    });
    setEmailDatas(emailDatas);
  };

  return (
    <tr>
      <td className='leftPanel'>
        <button onClick={() => setTag('inbox')}>Inbox</button>
        <br/><br/>
        <button onClick={() => setTag('deleted')}>Trash</button>
      </td>
      <td className='emailListPanel'>
        <EmailList handleDetailClick={handleDetailClick} filter={tag} emailDatas={emailDatas}/>
      </td>
      <td className='detailPanel'>
        {emailDetail.email === null ? <div>No email show</div> : (
          <EmailDetail handleDeleteClick={handleDeleteClick} email={emailDetail}/>)}

      </td>
    </tr>

  );
};

export default Homework8;