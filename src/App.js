import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./component/intro";
import Home from "./component/home";
import Header from "./component/header";
import "./css/index.css";
import Login from "./component/login";
import Clothes from "./component/clothes";
import Style from "./component/style";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/style" element={<Style />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
