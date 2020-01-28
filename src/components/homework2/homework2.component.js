import React, { useState } from "react";

const Homework2 = () => {

  const [number, setNumber] = useState(1);

  const handleChange = (flag) => {
    if (flag) setNumber(number+1);
    else setNumber(number-1);
  };

  return (
    <>
      {number}
      <br/>
      <button onClick={() => handleChange(true)}>Increase</button>
      <button onClick={() => handleChange(false)}>Decrease</button>
    </>
  );
};

export default Homework2;