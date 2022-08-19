import { useRef, useState, useMemo, useCallback } from "react";
import "./App.css";
import Counter from "./Counter";
import CreateUser from "./CreateUser";
import Hello from "./Hello";
import InputSample from "./InputSample";
import UserList from "./UserList";
import UserList2 from "./UserList2";
import UserList3 from "./UserList3";
import Wrapper from "./Wrapper";

const countActiveUsers = (users) => {
  console.log("활성 사용자수 세는중...");
  return users.filter((user) => user.active).length;
};

function App() {
  const name = "React";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    padding: "20px",
  };

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;
  // const onChange = (e) => {
  //   const { name, value } = e.target;
  //   setInputs({
  //     ...inputs,
  //     [name]: value,
  //   });
  // };
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs((inputs) => ({
        ...inputs,
        [name]: value,
      }));
    },

    []
  );

  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(5); // 현재 지정된 배열수 이상이어야 한다.
  // const onCreate = () => {
  //   const user = {
  //     id: nextId.current,
  //     username,
  //     email,
  //   };

  //   setUsers([...users, user]);

  //   setInputs({
  //     username: "",
  //     email: "",
  //   });

  //   nextId.current += 1;
  // };
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    setUsers((users) => users.concat(user));

    setInputs({
      username: "",
      email: "",
    });

    nextId.current += 1;
  }, [username, email]);

  // const onRemove = (id) => {
  //   setUsers(users.filter((user) => user.id !== id));
  // };

  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);
  //useMemo(), 첫번쨰 파라미터는 콜백함수, 두번째 파라미터는 배열 [] deps

  return (
    <Wrapper>
      <Hello name="홍길동" navi="나비" color={style} isPecial />
      <div style={style}>{name}</div>
      <div className="box">박스</div>
      <Hello />
      <hr />
      <Counter />
      <hr />
      <InputSample />
      <hr />
      <UserList />
      <hr />
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList2 users={users} />
      <hr />
      <UserList3 users={users} onRemove={onRemove} onToggle={onToggle} />

      <div>활성 사용자수 : {count}</div>
    </Wrapper>
  );
}

export default App;
