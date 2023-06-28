import React from "react";
import "../css/header.css";
import logo from "../img/header/logo_white.png";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header-container">
      <ul className="header-list">
        <Link to="/clothes">
          <li className="header-clothes">Clothes</li>
        </Link>
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
        <Link to="/style">
          <li className="header-style">Style</li>
        </Link>
      </ul>
      <Link to="/login">
        <button className="loginBtn">Login</button>
      </Link>
    </div>
  );
}

export default Header;
