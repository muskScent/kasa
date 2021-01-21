import React, { Component } from "react";
import Gallery from "./Gallery";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="slogan">Chez vous, partout et ailleurs</div>
        <Gallery />
      </div>
    );
  }
}
