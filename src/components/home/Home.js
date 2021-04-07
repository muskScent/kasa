import React, { Component } from "react";
import Banner from "../banner/Banner";
import Gallery from "../gallery/Gallery";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <>
        <Banner
          image="../../assets/images/island-waves.png"
          text="Chez vous, partout et ailleurs"
        />
        <Gallery />
      </>
    );
  }
}
