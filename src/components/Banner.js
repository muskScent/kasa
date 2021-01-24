import React, { Component } from "react";
import "./Banner.css";

export default class Banner extends Component {
  render() {
    const style = {
      backgroundImage: `url("${this.props.image}")`,
    };
    return (
      <div className="banner" style={style}>
        {this.props.text}
      </div>
    );
  }
}
