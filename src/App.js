import "./App.css";
import "./Components/Font Awesome/Library";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import ParticleBackround from "./Backround/ParticleBackround";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Icon from "./Images/Icon.png";
function App(props) {
  const [questionstate, setquestionstate] = useState("1");

  return (
    <div className="main-cont-home">
      <div className="title-cont">
        <img src={Icon} className="img-logo" />
        <div className="title">-ntourage` 21 </div>
      </div>
      <h className="slogan">Survive to Revive</h>
      <div className="socialsCont">
        <a href="https://www.instagram.com/jhcentourage/">
          <FontAwesomeIcon icon={faInstagram} className="socials" size="3x" />
        </a>
        <a href="https://www.youtube.com/channel/UC1-aHmFkemmL0OuaPju3JFw">
          <FontAwesomeIcon icon={faYoutube} className="socials" size="3x" />
        </a>
        <a href="https://www.linkedin.com/company/entourage-jhc/">
          <FontAwesomeIcon icon={faLinkedin} className="socials" size="3x" />
        </a>
        <a href="https://www.facebook.com/jhcentourage/">
          <FontAwesomeIcon
            icon={faFacebookSquare}
            className="socials"
            size="3x"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
