import React from "react";

const MainPage = ({history}) => {
  return (
    <>
      <button onClick={() => history.push('/hm1')}>Homework1</button>
      <br/><br/>
      <button onClick={() => history.push('/hm1')}>Homework2</button>
    </>
);
};

export default MainPage;