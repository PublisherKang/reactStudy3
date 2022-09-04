import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";

function App() {
  return (
    <div>
      {/* 리액트 라우터 버전 6방식 
        component ==> element
        부모에 routes 추가해줘야함
      */}
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/About">소개</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
