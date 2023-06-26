import React, { useState } from "react";
import "../css/intro.css";
function Intro() {
  const [btnClick, setBtnClick] = useState("");
  const [display, setDisplay] = useState("");

  const BtnHandle = () => {
    btnClick === "" ? setBtnClick("active") : setBtnClick("");

    setTimeout(() => {
      setDisplay("none");
    }, 1000);
  };
  return (
    <div className="intro-container" style={{ display: display }}>
      <button className={`eight-flip ${btnClick}`} onClick={BtnHandle}>
        <div className="eight">
          <div className="logo" id="logoTop">
            <div></div>
          </div>
          <div className="logo" id="logoRight">
            <div></div>
          </div>
          <div className="logo" id="logoLeft">
            <div></div>
          </div>
          <div className="logo" id="logoBottom">
            <div></div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default Intro;
