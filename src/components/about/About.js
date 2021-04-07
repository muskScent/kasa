import React, { Component } from "react";
import "./About.css";
import Accordion from "../accordion/Accordion";
import Banner from "../banner/Banner";

export default class About extends Component {
  state = {
    accordions: [
      {
        title: "Fiabilité",
        content:
          "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
      },
      {
        title: "Respect",
        content:
          "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      },
      {
        title: "Service",
        content:
          "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
      },
      {
        title: "Sécurité",
        content:
          "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
      },
    ],
    accordionWidth: 85,
  };

  componentDidMount() {
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
      this.setState({ ...this.state, accordionWidth: 85 });
    }
  };
  render() {
    return (
      <>
        <Banner image="../assets/images/moutains.png" />
        {this.state.accordions.map((o, index) => (
          <div className="flex-center">
            <Accordion
              title={o.title}
              content={o.content}
              width={this.state.accordionWidth}
              key={index}
            />
          </div>
        ))}
        <div className="blank"></div>
      </>
    );
  }
}
