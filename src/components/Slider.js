import React, { Component } from "react";
import LeftArrow from "../assets/images/left-arrow.svg";
import RightArrow from "../assets/images/right-arrow.svg";
import "./Slider.css";

export default class Slider extends Component {
  render() {
    return (
      <>
        <div className="slider-container">
          <img
            src={LeftArrow}
            alt="left-arrow"
            className="slider-button"
            id="prevBtn"
          />
          <img
            src={RightArrow}
            alt="right-arrow"
            className="slider-button"
            id="nextBtn"
          />

          <div className="slider">
            <img src="../assets/images/slide-5.jpg" id="lastClone" alt="" />
            <img src="../assets/images/slide-1.jpg" alt="" />
            <img src="../assets/images/slide-2.jpg" alt="" />
            <img src="../assets/images/slide-3.jpg" alt="" />
            <img src="../assets/images/slide-4.jpg" alt="" />
            <img src="../assets/images/slide-5.jpg" alt="" />
            <img src="../assets/images/slide-1.jpg" id="firstClone" alt="" />
          </div>
        </div>
      </>
    );
  }
}
