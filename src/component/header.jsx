import React from "react";
import "../css/header.css";
import logo from "../img/header/logo_white.png";

function Header(props) {
  return (
    <div className="header-container">
      <ul className="header-list">
        <li className="header-clothes">Clothes</li>
        <li className="header-logo-contianer">
          <div className="logo-box">
            <div className="header-logo" id="header-logo-top">
              <div></div>
            </div>
            <div className="header-logo" id="header-logo-right">
              <div></div>
            </div>
            <div className="header-logo" id="header-logo-left">
              <div></div>
            </div>
            <div className="header-logo" id="header-logo-bottom">
              <div></div>
            </div>
          </div>
        </li>
        <li className="header-style">Style</li>
      </ul>
    </div>
  );
}

export default Header;
