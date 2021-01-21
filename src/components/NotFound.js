import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default class NotFound extends Component {
  render() {
    return (
      <div className="text-center not-found">
        <div className="not-found-404">
          <span>404</span>
        </div>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <div className="back-home">
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
      </div>
    );
  }
}
