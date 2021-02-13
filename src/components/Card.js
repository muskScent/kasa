import React, { Component } from "react";
import RentData from "../data/data.json";
import Slider from "./slider/Slider";
import Accordion from "./Accordion";
import "./Card.css";

export default class Card extends Component {
  state = {
    accordionWidth: 47.5,
  };

  componentDidMount() {
    if (
      RentData.filter((o) => o.id === this.props.match.params.id).length === 0
    ) {
      this.props.history.push("/404");
    }

    this.handleAccordionWidth();
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
    const slides = RentData.filter(
      (o) => o.id === this.props.match.params.id
    ).map((o) => o.pictures)[0];

    const description = `Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à 1 station de la gare de l'est (7 minutes à pied). `;

    const equipements = `Climatisation
    Wi-Fi
    Cuisine
    Espace de travail
    Fer à repasser
    Sèche-cheveux
    Cintres`;

    return (
      <>
        <Slider slides={slides} />
        <div className="card--details">
          <Accordion
            title="Description"
            content={description}
            width={this.state.accordionWidth}
          />
          <Accordion
            title="Équipements"
            content={description}
            width={this.state.accordionWidth}
          />
        </div>
      </>
    );
  }
}
