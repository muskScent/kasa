import React, { Component } from "react";
import Slider from "./Slider";

export default class Card extends Component {
  render() {
    return (
      <div className="container">
        <Slider id={this.props.match.params.id} />
      </div>
    );
  }
}
