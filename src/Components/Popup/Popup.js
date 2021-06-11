import React, { useState } from "react";
import "./Popups.css";
import ReactDOM from "react-dom";

function Popup(props) {
  const [code, setcode] = useState("");
  const [error, seterror] = useState("");
  const changeHandler = (e) => {
    setcode(e.target.value);
  };

  const submitHandler = (e) => {
    console.log("asdf");
    console.log(code.toUpperCase());
    if (code.toUpperCase() === "ASDF" || code.toUpperCase() === "ZXCV") {
      props.onClick(false);
      props.redirect(true);
      seterror("");
    } else {
      seterror("Please enter a valid code.");
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
          Enter your code
          <input type="text" className="field" onChange={changeHandler}></input>
          <div className="wrong">{error}</div>
          <button className="slide" onClick={submitHandler}>
            Submit
          </button>
        </div>
      </>,
      document.getElementById("portal")
    );
}

export default Popup;
