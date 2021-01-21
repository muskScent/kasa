import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Navbar />
        </div>
      </div>
    );
  }
}
