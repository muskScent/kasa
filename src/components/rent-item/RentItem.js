import React, { Component } from "react";
import "./RentItem.css";

export default class RentItem extends Component {
  constructor(props) {
    super(props);
    this.item = React.createRef();
  }

  componentDidMount() {
    this.item.current.style.backgroundImage = `url('${this.props.cover}')`;
  }

  render() {
    return (
      <div className="item" ref={this.item}>
        <span className="rent-item-title">{this.props.title}</span>
      </div>
    );
  }
}
