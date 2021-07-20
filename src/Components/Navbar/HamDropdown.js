import React from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import "./Navbar.css";

function HamDropdown({ setDrpdwn }) {
  return (
    <div className="main-cont-drpdwn">
      <hr
        style={{
          width: "50vw",
        }}
      />
      <a className="drpdwn-item" href="/">
        {" "}
        Home
      </a>
      <hr
        style={{
          width: "50vw",
        }}
      />
      <a className="drpdwn-item" href="/events">
        Events
      </a>
      <hr
        style={{
          width: "50vw",
        }}
      />
      <a className="drpdwn-item" href="/our-team">
        Our Team
      </a>
      <hr
        style={{
          width: "50vw",
        }}
      />
      <a className="drpdwn-item" href="/schedule">
        Schedule
      </a>
      <hr
        style={{
          width: "50vw",
        }}
      />
      <ExpandLessIcon
        style={{ marginTop: "50px" }}
        fontSize="large"
        onClick={() => {
          setDrpdwn(false);
        }}
      />
    </div>
  );
}

export default HamDropdown;
