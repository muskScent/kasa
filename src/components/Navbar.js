import React, { Component } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
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
            <NavLink to="/" exact={true} activeClassName="is-active">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" exact={true} activeClassName="is-active">
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
