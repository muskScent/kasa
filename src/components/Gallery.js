import React, { Component } from "react";
import "./Gallery.css";
import RentItem from "./RentItem";
import RentData from "../data/data.json";

const RentItems = RentData.map((item) => <RentItem />);

export default class Gallery extends Component {
  render() {
    return <div className="gallery">{RentItems}</div>;
  }
}
