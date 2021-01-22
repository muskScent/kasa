import React, { Component } from "react";
import "./Accordion.css";

export default class Accordion extends Component {
  state = { isActive: false };

  toggle = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    const { isActive } = this.state;
    const displayBlock = { display: "block" };
    const displayNone = { display: "none" };

    return (
      <div>
        <button
          className={`accordion ${isActive ? "active" : ""}`}
          onClick={this.toggle}
        >
          Section 1
        </button>
        <div className="panel" style={isActive ? displayBlock : displayNone}>
          <p>Lorem ipsum...</p>
        </div>
      </div>
    );
  }
}
