import React, { Component } from "react";
import Star from "./Star";

export default class Rating extends Component {
  render() {
    const stars = [];
    const red = "#FF6060";
    const grey = "#E3E3E3";

    for (let i = 0; i < parseInt(this.props.rating); ++i) {
      stars.push(<Star color={red} />);
    }

    for (let i = 0; i < 5 - parseInt(this.props.rating); i++) {
      stars.push(<Star color={grey} />);
    }

    return stars;
  }
}
