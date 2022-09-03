import React from "react";
import Users from "./Users";
import UsersCon from "./UsersCon";

import { UsersProvider } from "./UsersContext";
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
      <hr />
      <UsersProvider>
        <UsersCon />
      </UsersProvider>
    </div>
  );
};

export default App;
