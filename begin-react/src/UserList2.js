import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <b>
        {user.username} <span>{user.email}</span>
      </b>
    </div>
  );
};

const UserList2 = ({ users }) => {
  return (
    // <div>
    //   <User user={users[0]} />
    //   <User user={users[1]} />
    //   <User user={users[2]} />
    //   <User user={users[3]} />
    // </div>

    //map을 사용해 반복
    <div>
      {/* key가 반드시 필요하다! */}
      {/* 
      map 메서드의 두번째 index 값으로 사용가능하고,
      id값을 추가해서도 가능하다.
      순서도를 위해 key값은 반드시 필요하다.
      */}
      {users.map((user, index) => (
        // <User user={user} key={index} />
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList2;
