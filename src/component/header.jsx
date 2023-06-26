import React from "react";
import "../css/header.css";
import logo from "../img/header/logo_white.png";

function Header(props) {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={logo} alt="logo" />
        <p>EIGHT</p>
      </div>
      <ul className="header-list">
        <li>Clothes</li>
        <li>Style</li>
        <li>Login</li>
      </ul>
    </div>
  );
}

export default Header;
