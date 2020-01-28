import React, { useEffect, useState } from "react";

const Homework3 = () => {

  const [number, setNumber] = useState(0);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    console.log(isStart);
    console.log(number);
    if (isStart) {
     startNumber();
    }
  }, [number]);

  const startNumber = () => {
    setIsStart(true);
    setTimeout(() => {
      setNumber(number + 1);
    }, 1000);
  };

  const stopNumber = () => {
    setIsStart(false);
  };

  const resetNumber = () => {
    setIsStart(false);
    setNumber(0);
  };

  return (
    <>
      {number}
      <br/>
      {isStart ? <button onClick={stopNumber}>Stop</button> : <button onClick={startNumber}>Start</button>}
      <button onClick={resetNumber}>Reset</button>
    </>
  );
};

export default Homework3;