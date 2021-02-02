import React, { Component } from "react";
import Slider from "./Slider";

export default class Card extends Component {
  componentDidMount() {
    console.log("Card " + JSON.stringify(this.props));
  }
  render() {
    return (
      <div>
        <Slider id={this.props.match.params.id} />
      </div>
    );
  }
}
