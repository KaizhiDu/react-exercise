import React from "react";

const MainPage = ({history}) => {
  return (
    <>
      <button onClick={() => history.push('/hm1')}>Homework1</button>
      <br/><br/>
      <button onClick={() => history.push('/hm2')}>Homework2</button>
      <br/><br/>
      <button onClick={() => history.push('/hm3')}>Homework3</button>
      <br/><br/>
      <button onClick={() => history.push('/hm4')}>Homework4</button>
      <br/><br/>
      <button onClick={() => history.push('/hm5')}>Homework5</button>
      <br/><br/>
      <button onClick={() => history.push('/hm6')}>Homework6</button>
      <br/><br/>
      <button onClick={() => history.push('/hm7')}>Homework7</button>
      <br/><br/>
      <button onClick={() => history.push('/hm8')}>Homework8</button>
      <br/><br/>
      <button onClick={() => history.push('/hm9')}>Homework9</button>
    </>
  );
};

export default MainPage;