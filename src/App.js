import "./App.css";
import "./Components/Font Awesome/Library";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Icon from "./Images/Icon.png";
function App(props) {
  return (
    <div className="main-cont-home">
      <div className="title-cont">
        <img src={Icon} className="img-logo" alt="Entourage Logo" />
        <div className="title">-ntourage` 21 </div>
      </div>
      <h className="slogan">Survive to Revive</h>
      <div className="socialsCont">
        <a
          href="https://www.instagram.com/jhcentourage/"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} className="socials" size="3x" />
        </a>
        <a
          href="https://www.youtube.com/channel/UC1-aHmFkemmL0OuaPju3JFw"
          aria-label="Twitter"
        >
          <FontAwesomeIcon icon={faYoutube} className="socials" size="3x" />
        </a>
        <a
          href="https://www.linkedin.com/company/entourage-jhc/"
          aria-label="LinedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} className="socials" size="3x" />
        </a>
        <a href="https://www.facebook.com/jhcentourage/" aria-label="Facebook">
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
