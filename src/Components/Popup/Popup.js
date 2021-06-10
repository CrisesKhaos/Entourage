import React, { useState } from "react";
import "./Popups.css";
import ReactDOM from "react-dom";

function Popup(props) {
  const [code, setcode] = useState("");
  const changeHandler = (e) => {
    setcode(e.target.value);
  };

  const submitHandler = (e) => {
    console.log("asdf");
    console.log(code.toUpperCase());
    if (code.toUpperCase() === "ASDF") {
      props.onClick(false);
      props.redirect(true);
    }
  };

  if (!props.open) return null;
  else
    return ReactDOM.createPortal(
      <>
        <div className="modal-overlay" onClick={() => props.onClick(false)} />
        <div className="modal">
          Enter your code
          <input type="text" className="field" onChange={changeHandler}></input>
          <button className="slide" onClick={submitHandler}>
            Submit
          </button>
        </div>
      </>,
      document.getElementById("portal")
    );
}

export default Popup;
