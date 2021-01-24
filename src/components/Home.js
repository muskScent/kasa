import React, { Component } from "react";
import Banner from "./Banner";
import Gallery from "./Gallery";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <Banner
          image="../assets/images/island-waves.png"
          text="Chez vous, partout et ailleurs"
        />
        <Gallery />
      </div>
    );
  }
}
