import React from "react";

const User = React.memo(function User({ user }) {
  return (
    <div>
      <b>
        {user.username} <span>{user.email}</span>
      </b>
    </div>
  );
});

const UserList = () => {
  const users = [
    {
      id: 1,
      username: "홍길동",
      email: "aaa@naver.com",
    },
    {
      id: 2,
      username: "김영희",
      email: "bbb@naver.com",
    },
    {
      id: 3,
      username: "나비",
      email: "ccc@naver.com",
    },
    {
      id: 4,
      username: "파라솔",
      email: "ddd@naver.com",
    },
  ];

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

export default React.memo(UserList);
