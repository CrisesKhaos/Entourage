import React, { useState } from "react";
import "./Nancy.css";
import { Content } from "./Boxes.js";
import Popup from "../Popup/Popup";
import { Redirect } from "react-router-dom";

function Nancy(props) {
  const [pass, setpass] = useState(false);
  const [redirect, setredirect] = useState(false);
  const [to, setto] = useState();
  const clickHandler = (index) => {
    if (index === 4 || index === 5) {
      setpass(true);
      setto(index);
    } else
      props.history.push({ pathname: "/box-content", state: { index: index } });
  };
  if (redirect === false)
    return (
      <div className="x">
        <Popup open={pass} onClick={setpass} redirect={setredirect} />
        <div className="grid-drew">
          {Content.map((item, index) => {
            return (
              <div
                key={index}
                className="box"
                onClick={() => clickHandler(index)}
              >
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
    );
  else
    return <Redirect to={{ pathname: "/box-content", state: { index: to } }} />;
}

export default Nancy;
