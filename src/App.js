import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./component/intro";
import Home from "./component/home";
import Header from "./component/header";
import "./css/index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
