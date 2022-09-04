// 액션 타입 선언

const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

// 액션 생성함수 선언
let nextId = 1; //todo 데이터에서 사용할 고유 id

export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더한다.
    text,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

// 초기 상태 선언
// 리듀서의 초기상태는 꼭 객체일 필요가 없다.
// 배열이어도 되고, 원시타입 ( 숫자, 문자열, 불리언 ) 이어도 상관없다.

const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map(
        (todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo) // id가 일치하면 done 값을 반전 시키고, 아니라면 그대로 둔다.
      );
    default:
      return state;
  }
}
