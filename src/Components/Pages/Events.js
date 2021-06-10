import React, { useState } from "react";
import Popup from "../Popup/Popup";
import "./Events.css";
function Events() {
  const [login, setlogin] = useState(false);

  return (
    <div className="container">
      <Popup open={login} onClick={setlogin} />

      <div className="nancyDrew" onClick={() => setlogin(true)}>
        <p className="event-title">Financy Drew</p>
      </div>

      <div className="fundamentals">
        <p className="event-title">Fundamentals</p>
      </div>
    </div>
  );
}

export default Events;
