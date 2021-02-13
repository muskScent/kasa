import React, { Component } from "react";
import leftArrow from "../../assets/images/left-arrow.svg";
import rightArrow from "../../assets/images/right-arrow.svg";
import "./Slider.css";
import "./Arrow.css";

export default class Arrow extends Component {
  render() {
    const rightArrowStyle = { right: "25px" };
    const leftArrowStyle = { left: "25px" };
    const [src, style] =
      this.props.direction === "right"
        ? [rightArrow, rightArrowStyle]
        : [leftArrow, leftArrowStyle];

    return (
      <div className="arrow" onClick={this.props.handleClick} style={style}>
        {<img src={src} alt="right-arrow" className="arrow-image" />}
      </div>
    );
  }
}
