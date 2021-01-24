import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="container">
        <div>
          <Link to="/">
            <Logo color="#ff6060" />
          </Link>
        </div>
        <ul className="nav__links">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
