import React from "react";
import Users from "./Users";
import UsersCustom from "./UsersCustom";
import UsersCustomId from "./UsersCustomId";
import UsersReducer from "./UsersReducer";

const App = () => {
  return (
    <div>
      <Users />
      <hr />
      <UsersReducer />
      <hr />
      <UsersCustom />
      <hr />
      <UsersCustomId />
    </div>
  );
};

export default App;
