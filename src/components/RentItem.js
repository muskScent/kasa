import React, { Component } from "react";
import "./RentItem.css";

export default class RentItem extends Component {
  render() {
    return (
      <div className="item">
        <span className="rent-item-title">{this.props.title}</span>
      </div>
    );
  }
}
