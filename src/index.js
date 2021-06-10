import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./Components/Pages/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Events from "./Components/Pages/Events";
import ContactUs from "./Components/Pages/ContactUs";
import Navbar from "./Components/Navbar/Navbar";
import Particles from "react-particles-js";
import ParticleBackround from "./Backround/ParticleBackround";

ReactDOM.render(
  <Router>
    <div id="particles-js">
      <ParticleBackround className="bg" />
    </div>
    <Navbar className="nav" />
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/events" exact component={Events} />
      <Route path="/signin" exact component={Login} />
      <Route path="/contact-us" exact component={ContactUs} />
    </Switch>
  </Router>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
