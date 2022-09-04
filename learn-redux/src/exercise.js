import { createStore } from "redux";
// createStore는 스토어를 만들어주는 함수이다.
// 리액트 프로젝트에서는 단 하나의 스토어를 만든다.

const initialState = {
  counter: 0,
  text: "",
  list: [],
};

// 액션 타입 정의
// 액션 타입은 주로 대문자로 작성한다.

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

// 일반함수 사용시 return 사용
function increase() {
  return {
    type: INCREASE, // 액션 객체에서는 type값이 필수이다.
  };
}

// 화살표 함수 사용시 소괄호를 사용하고 return 생략, 간단함
const decrease = () => ({
  type: DECREASE,
});

const changeText = (text) => ({
  type: CHANGE_TEXT,
  text, // 액션 안에는 type 외에 추가적인 필드를 마음대로 넣을 수 있다.
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

// 리듀서 만들기
// 위 액션 생성함수들을 통해 만들어진 객체를 참조하여 새로운 상태를 만드는 함수를 만든다.
// 리듀에서는 불변성을 꼭 지켜야한다!

function reducer(state = initialState, action) {
  //state의 초기값으로 initialState를 지정한다.

  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

// 스토어 만들기
const store = createStore(reducer);
console.log(store.getState()); // store 안의 상태 조회

// 스토어안의 상태가 바뀔때마다 호출되는 함수
const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);
// 구독을 해제하고 싶을때 unsubscribe() 호출

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList({ id: 1, text: "하이" }));
