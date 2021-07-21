import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./Components/Pages/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Events from "./Components/Pages/Events";
import Navbar from "./Components/Navbar/Navbar";
import Particles from "react-particles-js";
import ParticleBackround from "./Backround/ParticleBackround";
import Schedule from "./Components/Pages/Schedule";
import Nancy from "./Components/Pages/Nancy";
import BoxContent from "./Components/Pages/BoxContent";
import Fundamentals from "./Components/Pages/Fundamentals";
import FundContent from "./Components/Pages/FundContent";
import Leaderboard from "./Components/Pages/Leaderboard/Leaderboard";
import Admin from "./Components/Pages/Admin/Admin";
import OtherEvents from "./Components/Pages/OtherEvents/OtherEvents";
import OurTeam from "./Components/Pages/Our Team/OurTeam";
import HamDropdown from "./Components/Navbar/HamDropdown";
import OtherEventsCont from "./Components/Pages/Other Events Cont/OtherEventsCont";

ReactDOM.render(
  <Router>
    <div className="bg-main">
      <ParticleBackround />
    </div>
    <Navbar className="nav" />
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/events" exact component={Events} />
      <Route path="/signin" exact component={Login} />
      <Route path="/schedule" exact component={Schedule} />
      <Route path="/nancy-home" exact component={Nancy} />
      <Route path="/box-content" exact component={BoxContent} />
      <Route path="/fundamentals" exact component={Fundamentals} />
      <Route path="/fund-content" exact component={FundContent} />
      <Route path="/leaderboard" exact component={Leaderboard} />
      <Route path="/admin" exact component={Admin} />
      <Route path="/other-events" exact component={OtherEvents} />
      <Route path="/our-team" exact component={OurTeam} />
      <Route path="/drpdwn" exact component={HamDropdown} />
      <Route path="/other-events-cont" exact component={OtherEventsCont} />
    </Switch>
  </Router>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
