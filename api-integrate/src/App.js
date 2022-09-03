import React from "react";
import Users from "./Users";
import UsersReducer from "./UsersReducer";

const App = () => {
  return (
    <div>
      <Users />
      <hr />
      <UsersReducer />
    </div>
  );
};

export default App;
