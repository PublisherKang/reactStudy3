import React, { useRef, useReducer, useMemo, useCallback } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

const countActiveUsers = (users) => {
  console.log("활성 사용자수 세는중...");
  return users.filter((user) => user.active).length;
};

const initialState = {
  inputs: {
    username: "",
    email: "",
  },

  users: [
    {
      id: 1,
      username: "이대감",
      email: "eee@naver.com",
      active: true,
    },
    {
      id: 2,
      username: "송대감",
      email: "fff@naver.com",
      active: false,
    },
    {
      id: 3,
      username: "김대감",
      email: "ggg@naver.com",
      active: false,
    },
    {
      id: 4,
      username: "박대감",
      email: "hhh@naver.com",
      active: true,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    default:
      return state;
  }
}

const App2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  }, []);

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} />
      <UserList users={users} />
      <div>활성사용자 수: 0</div>
    </>
  );
};

export default App2;
