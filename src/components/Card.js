import React, { Component } from "react";
import RentData from "../data/data.json";
import Slider from "./slider/Slider";

export default class Card extends Component {
  componentDidMount() {
    if (
      RentData.filter((o) => o.id === this.props.match.params.id).length === 0
    ) {
      this.props.history.push("/404");
    }
  }

  render() {
    const slides = RentData.filter(
      (o) => o.id === this.props.match.params.id
    ).map((o) => o.pictures)[0];
    return (
      <div className="container">
        <Slider slides={slides} />
      </div>
    );
  }
}
