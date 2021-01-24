import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Card from "./components/Card";
import About from "./components/About";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main container">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/404" component={NotFound} />
            <Redirect from="*" to="/404" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
