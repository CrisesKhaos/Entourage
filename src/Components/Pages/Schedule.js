import React from "react";
import "./Events.css";
import img1 from "./ScheduleImgs/1.png";
import img2 from "./ScheduleImgs/2.png";
import img3 from "./ScheduleImgs/3.png";
import img4 from "./ScheduleImgs/4.png";

function Schedule() {
  return (
    <div className="main-cont-fund">
      <div className="main-card">
        <h2>Schedule</h2>
        <img alt="Schedule" src={img1} className="img-box-fund" />
        <img alt="Schedule" src={img2} className="img-box-fund" />
        <img alt="Schedule" src={img3} className="img-box-fund" />
        <img alt="Schedule" src={img4} className="img-box-fund" />
      </div>
    </div>
  );
}

export default Schedule;
