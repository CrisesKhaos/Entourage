import React from "react";
import "./OtherEvents.css";
import img1 from "../OtherEventsImg/1.png";
import img2 from "../OtherEventsImg/2.png";
import img3 from "../OtherEventsImg/3.png";
import img4 from "../OtherEventsImg/4.png";
import img5 from "../OtherEventsImg/5.png";
import img6 from "../OtherEventsImg/6.png";
import img7 from "../OtherEventsImg/7.png";
import img8 from "../OtherEventsImg/8.png";
import img9 from "../OtherEventsImg/9.png";
import img10 from "../OtherEventsImg/10.png";

function OtherEvents() {
  return (
    <div className="main-cont-other">
      <div>
        <div className="main-grid">
          <img src={img1} alt="Event" className="grid-img" />
          <img src={img2} alt="Event" className="grid-img" />
          <img src={img3} alt="Event" className="grid-img" />
          <img src={img4} alt="Event" className="grid-img" />
          <img src={img5} alt="Event" className="grid-img" />
          <img src={img6} alt="Event" className="grid-img" />
          <img src={img9} alt="Event" className="grid-img" />
          <img src={img10} alt="Event" className="grid-img" />
        </div>
      </div>
    </div>
  );
}

export default OtherEvents;
