import { useRef, useState } from "react";
import "./App.css";
import Counter from "./Counter";
import CreateUser from "./CreateUser";
import Hello from "./Hello";
import InputSample from "./InputSample";
import UserList from "./UserList";
import UserList2 from "./UserList2";
import Wrapper from "./Wrapper";

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
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "이대감",
      email: "eee@naver.com",
    },
    {
      id: 2,
      username: "송대감",
      email: "fff@naver.com",
    },
    {
      id: 3,
      username: "김대감",
      email: "ggg@naver.com",
    },
    {
      id: 4,
      username: "박대감",
      email: "hhh@naver.com",
    },
  ]);

  const nextId = useRef(5); // 현재 지정된 배열수 이상이어야 한다.
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    setUsers([...users, user]);

    setInputs({
      username: "",
      email: "",
    });

    nextId.current += 1;
  };

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
    </Wrapper>
  );
}

export default App;
