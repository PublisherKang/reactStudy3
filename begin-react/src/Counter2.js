// useReducer 사용해서 상태관리하기
import React, { useReducer } from "react";

//const [state, dispatch] = useReducer(reducer, initialState);
// state는 상태를 가르킴,
// dispatch는 액션을 발생시키는 함수
// 사용법 dispatch({type: 'INCREMENT'})
// useReducer의 첫번째 파라미터는 reducer 함수이고,
// 두번째 파라미터는 초기 상태이다.

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state >= 10 ? state : state + 1; // 10보다 크면 state를 멈춤

    case "DECREMENT":
      return state !== 0 ? state - 1 : state; // 0 보다 작으면 state를 멈춤

    default:
      return state;
  }
}

const Counter2 = () => {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <p>useReducer 사용한 상태 업데이트</p>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter2;
