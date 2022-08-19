import React, { useEffect } from "react";

const User = React.memo(function User({ user, onRemove, onToggle }) {
  // useEffect(() => {
  //   console.log("user값이 설정됨");
  //   console.log(user);
  //   return () => {
  //     console.log("user가 바뀌기 전");
  //     console.log(user);
  //   };
  // }, [user]);

  useEffect(() => {
    // console.log(user);
  }); // deps값을 설정하지 않은 경우.

  // useEffect 첫번째 파라미터는 함수, 두번째 파라미터는 배열 [] deps

  // useEffect에 사용하는 상태나, props가 있다면 deps []값을 설정해주어야 한다.
  // useEffect에 deps [] 값을 제외하면 리랜더링 될때마다 값을 호출한다.

  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username} <span>{user.email}</span>
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});

const UserList3 = ({ users, onRemove, onToggle }) => {
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
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default React.memo(UserList3);
