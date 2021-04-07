import React, { Component } from "react";
import "./Footer.css";
import Logo from "../logo/Logo";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="rights">
          <Logo color="#fff" />
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    );
  }
}
