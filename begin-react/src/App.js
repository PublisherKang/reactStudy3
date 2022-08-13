import "./App.css";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  const name = "React";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    padding: "20px",
  };
  return (
    <Wrapper>
      <Hello name="홍길동" navi="나비" color={style} isPecial />
      <div style={style}>{name}</div>
      <div className="box">박스</div>
      <Hello />
    </Wrapper>
  );
}

export default App;
