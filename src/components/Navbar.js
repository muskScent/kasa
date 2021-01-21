import React from "react";

import "./Navbar.css";
import LogoIcon from "../assets/logo.svg";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div>
          <img src={LogoIcon} alt="logo" className="logo" />
        </div>
        <div className="nav__links">
          <a href="">Accueil</a>
          <a href="">A Propos</a>
        </div>
      </nav>
    );
  }
}
