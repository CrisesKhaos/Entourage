import React, { useState } from "react";
import "./Nancy.css";
import { Content } from "./Boxes.js";
import Popup from "../Popup/Popup";

function Nancy(props) {
  const [pass, setpass] = useState(false);
  const [redirect, setredirect] = useState(true);
  const clickHandler = (index) => {
    if (index == 4 || index == 5) {
      setpass(true);
    }
    console.log(index);
  };

  return (
    <div className="container">
      <Popup open={pass} onClick={setpass} redirect={setredirect} />
      {Content.map((item, index) => {
        return (
          <div key={index} className="box" onClick={() => clickHandler(index)}>
            {item.title}
          </div>
        );
      })}
    </div>
  );
}

export default Nancy;
