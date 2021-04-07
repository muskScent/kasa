import React, { Component } from "react";
import "./Accordion.css";
import UpArrow from "../../assets/images/up-arrow.svg";
import DownArrow from "../../assets/images/down-arrow.svg";

export default class Accordion extends Component {
  state = { isActive: false };

  toggle = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    const { isActive } = this.state;

    return (
      <div style={{ width: `${this.props.width}%` }}>
        <div className="accordion" onClick={this.toggle}>
          <p>{this.props.title}</p>
          <img
            src={`${isActive ? DownArrow : UpArrow}`}
            alt={`${isActive ? "down-arrow" : "up-arrow"}`}
            className="accordion--arrow"
          />
        </div>
        {isActive && (
          <div className="panel">
            <p>{this.props.content}</p>
          </div>
        )}
      </div>
    );
  }
}
