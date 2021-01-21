import React, { Component } from "react";
import "./Navbar.css";
import LogoIcon from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div>
          <img src={LogoIcon} alt="logo" className="logo" />
        </div>
        <ul className="nav__links">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/card">A Propos</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
