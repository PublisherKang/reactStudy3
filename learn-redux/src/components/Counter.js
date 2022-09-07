import React from "react";

const Counter = ({ number, diff, onIncrease, onDecrease, onSetDiff }) => {
  const onChange = (e) => {
    //e.target.value의 타입은 문자열이기때문에 숫자로 변환해주어야한다.
    onSetDiff(parseInt(e.target.value, 10));
  };
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} min="1" onChange={onChange} />
        <button onClick={onIncrease}>+ 1</button>
        <button onClick={onDecrease}>- 1</button>
      </div>
    </div>
  );
};

export default Counter;
