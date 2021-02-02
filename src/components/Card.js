import React, { Component } from "react";
import RentData from "../data/data.json";
import Slider from "./Slider";

export default class Card extends Component {
  componentDidMount() {
    if (
      RentData.filter((o) => o.id === this.props.match.params.id).length === 0
    ) {
      this.props.history.push("/404");
    }
  }

  render() {
    return (
      <div className="container">
        <Slider id={this.props.match.params.id} />
      </div>
    );
  }
}
