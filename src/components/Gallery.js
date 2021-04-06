import React, { Component } from "react";
import "./Gallery.css";
import RentItem from "./RentItem";
import RentData from "../data/data.json";
import { Link } from "react-router-dom";

export default class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        {RentData.map((item, index) => (
          <Link to={`/card/${item.id}`} key={index}>
            <RentItem title={item.title} cover={item.cover} />
          </Link>
        ))}
      </div>
    );
  }
}
