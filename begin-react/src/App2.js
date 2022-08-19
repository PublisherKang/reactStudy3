import React, { useRef, useReducer, useMemo, useCallback } from "react";
import CreateUser from "./CreateUser";
import UserList3 from "./UserList3";

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
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };

    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };

    default:
      return state;
  }
}

const App2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(5);

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

  const onCreate = useCallback(
    (e) => {
      dispatch({
        type: "CREATE_USER",
        user: {
          id: nextId.current,
          username,
          email,
        },
      });
      nextId.current += 1;
    },
    [username, email]
  );

  const onToggle = useCallback((id) => {
    dispatch({
      type: "TOGGLE_USER",
      id,
    });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({
      type: "REMOVE_USER",
      id,
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList3 users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성사용자 수: {count}</div>
    </>
  );
};

export default App2;
