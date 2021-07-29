import React, { useState } from "react";
import "./Popups.css";
import ReactDOM from "react-dom";

function Popup(props) {
  console.log(props.inside);
  const [code, setcode] = useState("");
  const [error, seterror] = useState("");
  const changeHandler = (e) => {
    setcode(e.target.value);
  };

  const submitHandler = (e) => {
    if (props.inside === 4) {
      if (code.toUpperCase() === "FGHJ") {
        if (props.inScene) {
          props.setAuth(true);
          props.onClick(false);
          seterror("");
        } else {
          props.onClick(false);
          props.redirect(true);
          seterror("");
        }
      } else {
        seterror("Please enter a valid code.");
      }
    } else if (props.inside === 5) {
      if (code.toUpperCase() === "YUIO") {
        if (props.inScene) {
          props.setAuth(true);
          props.onClick(false);
          seterror("");
        } else {
          props.onClick(false);
          props.redirect(true);
          seterror("");
        }
      } else {
        seterror("Please enter a valid code.");
      }
    } else {
      if (code.toUpperCase() === "VBNM") {
        if (props.inScene) {
          props.setAuth(true);
          props.onClick(false);
          seterror("");
        } else {
          props.onClick(false);
          props.redirect(true);
          seterror("");
        }
      } else {
        seterror("Please enter a valid code.");
      }
    }
  };

  if (!props.open) return null;
  else
    return ReactDOM.createPortal(
      <>
        <div
          className="modal-overlay"
          onClick={() => {
            seterror("");
            props.onClick(false);
          }}
        />
        <div className="modal">
          {props.pass ? "Enter your password" : "Enter your code"}
          <input type="text" className="field" onChange={changeHandler}></input>
          <div className="wrong">{error}</div>
          {props.inside === 4 || props.inside === 5 ? (
            <div className="xy">
              Complete the given task to open this document.
            </div>
          ) : null}
          <button className="slide" onClick={submitHandler}>
            Submit
          </button>
        </div>
      </>,
      document.getElementById("portal")
    );
}

export default Popup;
