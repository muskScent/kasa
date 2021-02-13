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
    const cardInfo = RentData.find((o) => o.id === this.props.match.params.id);
    const slides = cardInfo.pictures;
    const host = cardInfo.host;

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
        <div className="card--info">
          <div className="card--info--summary">
            <h2>Cozy loft on the Canal Saint-Martin</h2>
            <h3>Paris, Île-de-France</h3>
            <div className="card--info--summary-chips">
              <div className="card--chip">Cozy</div>
              <div className="card--chip">Canal</div>
              <div className="card--chip">Paris 10</div>
            </div>
          </div>
          <div className="card--info--rating">
            <div className="card--info--portrait">
              <p className="card--info__hostname">Alexandre Dumas</p>
              <img
                src={host.picture}
                alt="Host portrait"
                className="circle--img"
              />
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
            content={description}
            width={this.state.accordionWidth}
          />
        </div>
      </>
    );
  }
}
