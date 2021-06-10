import React, { useState } from "react";
import Popup from "../Popup/Popup";
import "./Events.css";
import { Redirect } from "react-router-dom";
function Events() {
  const [login, setlogin] = useState(false);
  const [nancy, setnancy] = useState(false);
  if (nancy === false)
    return (
      <div className="container">
        <Popup open={login} onClick={setlogin} redirect={setnancy} />
        <div className="nancyDrew" onClick={() => setlogin(true)}>
          <p className="event-title">Fi-Nancy Drew</p>
        </div>

        <div className="fundamentals">
          <p className="event-title">Fun(Damentals)</p>
        </div>
      </div>
    );
  else return <Redirect to="/nancy-home" />;
}

export default Events;
