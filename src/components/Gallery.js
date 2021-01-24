import React, { Component } from "react";
import "./Gallery.css";
import RentItem from "./RentItem";
import RentData from "../data/data.json";

export default class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        {RentData.map((item) => (
          <RentItem />
        ))}
      </div>
    );
  }
}
