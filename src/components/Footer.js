import React, { Component } from "react";
import "./Footer.css";
import Logo from "./Logo";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="rights">
          <Logo color="#fff" />
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    );
  }
}
