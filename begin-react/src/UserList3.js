import React, { useContext } from "react";
import { UserDispatch } from "./App4";

const User = React.memo(function User({ user }) {
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => dispatch({ type: "TOGGLE_USER", id: user.id })}
      >
        {user.username} <span>{user.email}</span>
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => dispatch({ type: "REMOVE_USER", id: user.id })}>
        삭제
      </button>
    </div>
  );
});

const UserList3 = ({ users }) => {
  return (
    <div>
      {users.map((user, index) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default React.memo(UserList3);
