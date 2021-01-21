import React, { Component } from "react";

import "./Navbar.css";
import LogoIcon from "../assets/logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div>
          <img src={LogoIcon} alt="logo" className="logo" />
        </div>
        <ul className="nav__links">
          <li>
            <a href="">Accueil</a>
          </li>
          <li>
            <a href="">A Propos</a>
          </li>
        </ul>
      </nav>
    );
  }
}
