import axios from "axios";
import React from "react";
import useAsync from "./UseAsync";

async function getUsers(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  return response.data;
}

const User = ({ id }) => {
  const [state] = useAsync(() => getUsers(id), [id]);
  const { loading, data: users, error } = state;

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return null;

  return (
    <div>
      <h2>{users.username}</h2>
      <p>
        <b>Email: {users.email}</b>
      </p>
    </div>
  );
};

export default User;
