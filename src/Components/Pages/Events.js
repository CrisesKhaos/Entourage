import React, { useState } from "react";
import Popup from "../Popup/Popup";
import "./Events.css";
import { Redirect } from "react-router-dom";
function Events() {
  const [login, setlogin] = useState(false);
  const [nancy, setnancy] = useState(false);
  if (nancy === false)
    return (
      <div className="main-container">
        <Popup open={login} onClick={setlogin} redirect={setnancy} />
        <div className="nancyDrew" onClick={() => setlogin(true)}>
          <div className="event-title">Fi-Nancy Drew</div>
          <div className="desc">
            <p>
              Be the Sherlock Holmes of your story and come up with modern
              solutions for the ever-growing modern problems. But remember, you
              have to be vigilant with the advent of technology; it has become
              very easy to hide lies between the numbers. Everyone possesses the
              quality of reading between the lines, only few smart ones can read
              between the numbers, the prerequisite here, is Forensic
              Accounting. If you are Fi-nancy enough then this is your reign to
              claim.
            </p>
          </div>
        </div>

        <div className="fundamentals">
          <p className="event-title">Fun(Damentals)</p>
        </div>
      </div>
    );
  else return <Redirect to="/nancy-home" />;
}

export default Events;
