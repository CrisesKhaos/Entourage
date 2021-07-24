import React from "react";
import img0 from "./0.png";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";
import img7 from "./7.png";

function OtherEventsCont(props) {
  function GetEvent(props1) {
    switch (props1.x) {
      default:
        return <div>Error 🤡 </div>;
      case 0:
        return (
          <div>
            <img className="img-box-fund" src={img0} alt="Extra Event" />
          </div>
        );
      case 1:
        return <img className="img-box-fund" src={img1} alt="Extra Event" />;
      case 2:
        return <img className="img-box-fund" src={img2} alt="Extra Event" />;
      case 3:
        return <img className="img-box-fund" src={img3} alt="Extra Event" />;
      case 4:
        return <img className="img-box-fund" src={img4} alt="Extra Event" />;
      case 5:
        return <img className="img-box-fund" src={img5} alt="Extra Event" />;
      case 6:
        return <img className="img-box-fund" src={img6} alt="Extra Event" />;
      case 7:
        return <img className="img-box-fund" src={img7} alt="Extra Event" />;
    }
  }

  return (
    <div className="main-cont-fund">
      <div className="main-card">
        <GetEvent x={props.location.state.index} />
        <a href="/other-events">
          <button className="slidehome1">Events</button>
        </a>
      </div>
    </div>
  );
}

export default OtherEventsCont;
