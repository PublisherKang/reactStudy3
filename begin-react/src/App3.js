import React, { useRef, useReducer, useMemo, useCallback } from "react";
import CreateUser from "./CreateUser";
import useInputs from "./hooks/useInputs";
import UserList3 from "./UserList3";

const countActiveUsers = (users) => {
  console.log("활성 사용자수 세는중...");
  return users.filter((user) => user.active).length;
};

const initialState = {
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

export const UserDispatch = React.createContext(null);

const App3 = () => {
  const [{ username, email }, onChange, reset] = useInputs({
    username: "",
    email: "",
  });

  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(5);

  const { users } = state;

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

      reset();
      nextId.current += 1;
    },
    [username, email, reset]
  );

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList3 users={users} />
      <div>활성사용자 수: {count}</div>
    </UserDispatch.Provider>
  );
};

export default App3;
