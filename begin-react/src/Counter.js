import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  // const onIncrease = () => {
  //   setNumber(number + 1);
  // };

  // const onDecrease = () => {
  //   setNumber(number - 1);
  //   if (number === 0) {
  //     setNumber(0);

  //     console.log(number);
  //   }
  // };

  // 파라미터로 최적화 하기
  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const onDecrease = () => {
    setNumber((prevNumber) => prevNumber - 1);
    if (number === 0) {
      setNumber(0);

      console.log(number);
    }
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;
