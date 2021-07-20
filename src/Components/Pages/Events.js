import React, { useState } from "react";
import Popup from "../Popup/Popup";
import "./Events.css";
import img1 from "../Pages/OtherEventsImg/7.png";
import img2 from "../Pages/OtherEventsImg/8.png";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Events(props) {
  const [login, setlogin] = useState(false);
  const [nancy, setnancy] = useState(false);
  // <div>
  //   <div className="row-div-events">
  //     <div className="nancyDrew" onClick={() => setlogin(true)}>
  //       <div className="event-title">Fi-Nancy Drew</div>
  //       <div className="desc">
  //         Be the Sherlock Holmes of your story and come up with modern solutions
  //         for the ever-growing modern problems. But remember, you have to be
  //         vigilant with the advent of technology; it has become very easy to
  //         hide lies between the numbers. Everyone possesses the quality of
  //         reading between the lines, only few smart ones can read between the
  //         numbers, the prerequisite here, is Forensic Accounting. If you are
  //         Fi-nancy enough then this is your reign to claim.
  //       </div>
  //     </div>

  //     <div
  //       className="fundamentals"
  //       onClick={() => {
  //         props.history.push("/signin");
  //       }}
  //     >
  //       <div className="event-title">Fun(Damentals)</div>
  //       <div className="desc">
  //         Be the Sherlock Holmes of your story and come up with modern solutions
  //         for the ever-growing modern problems. But remember, you have to be
  //         vigilant with the advent of technology; it has become very easy to
  //         hide lies between the numbers. Everyone possesses the quality of
  //         reading between the lines, only few smart ones can read between the
  //         numbers, the prerequisite here, is Forensic Accounting. If you are
  //         Fi-nancy enough then this is your reign to claim.
  //       </div>
  //     </div>
  //   </div>
  //   <div
  //     className="others"
  //     onClick={() => {
  //       props.history.push("/other-events");
  //     }}
  //   >
  //     Other Events..
  //   </div>
  // </div>;
  if (nancy === false)
    return (
      <div className="main-container-event">
        <Popup open={login} onClick={setlogin} redirect={setnancy} />
        <div className="row-div-events">
          <img
            src={img1}
            alt="fund"
            className="grid-img-event"
            onClick={() => {
              props.history.push("/signin");
            }}
          ></img>
          <img
            src={img2}
            alt="fund"
            className="grid-img-event"
            onClick={() => setlogin(true)}
          ></img>
        </div>

        <div
          className="others"
          onClick={() => {
            props.history.push("/other-events");
          }}
        >
          Other Events..
        </div>
      </div>
    );
  else return <Redirect to="/nancy-home" />;
}

export default Events;
