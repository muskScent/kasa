import React, { Component } from "react";
import RentData from "../../data/data.json";
import Slider from "../slider/Slider";
import Accordion from "../accordion/Accordion";
import Rating from "../rating/Rating";
import "./Card.css";

export default class Card extends Component {
  state = {
    accordionWidth: 47.5,
    error: null,
    isLoaded: false,
    data: null,
  };

  componentDidMount() {
    const data = RentData.find((o) => o.id === this.props.match.params.id);

    if (!data) {
      this.props.history.push("/404");
    }

    this.handleAccordionWidth();
    this.setState({
      ...this.state,
      isLoaded: true,
      data: data,
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.adaptAccordionWidth);
  }

  handleAccordionWidth = () => {
    this.adaptAccordionWidth();

    window.addEventListener("resize", () => {
      this.adaptAccordionWidth();
    });
  };

  adaptAccordionWidth = () => {
    if (window.innerWidth <= 375) {
      this.setState({ ...this.state, accordionWidth: 100 });
    } else {
      this.setState({ ...this.state, accordionWidth: 47.5 });
    }
  };

  render() {
    const { error, isLoaded, data } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const data = this.state.data;
      const slides = data.pictures;
      const host = data.host;
      const description = data.description;
      const equipements = data.equipments.map((equipement) => (
        <div>{equipement}</div>
      ));
      const tags = data.tags.map((tag) => (
        <div className="card--chip">{tag}</div>
      ));

      return (
        <>
          <Slider slides={slides} />
          <div className="card--info">
            <div className="card--info--summary">
              <h2>{data.title}</h2>
              <h3>{data.location}</h3>
              <div className="card--info--summary-chips">{tags}</div>
            </div>
            <div className="card--info--rating">
              <div className="card--info--portrait">
                <p className="card--info__hostname">{host.name}</p>
                <img
                  src={host.picture}
                  alt="Host portrait"
                  className="circle--img"
                />
              </div>
              <div className="card--info__stars">
                <Rating rating={data.rating} />
              </div>
            </div>
          </div>
          <div className="card--details">
            <Accordion
              title="Description"
              content={description}
              width={this.state.accordionWidth}
            />
            <Accordion
              title="Équipements"
              content={equipements}
              width={this.state.accordionWidth}
            />
          </div>
        </>
      );
    }
  }
}
