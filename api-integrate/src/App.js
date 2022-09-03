import React from "react";
import Users from "./Users";
import UsersCustom from "./UsersCustom";
import UsersReducer from "./UsersReducer";

const App = () => {
  return (
    <div>
      <Users />
      <hr />
      <UsersReducer />
      <hr />
      <UsersCustom />
    </div>
  );
};

export default App;
