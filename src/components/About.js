import React, { Component } from "react";
import "./About.css";
import Accordion from "./Accordion";

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <Accordion />
        <Accordion />
        <Accordion />
      </div>
    );
  }
}
