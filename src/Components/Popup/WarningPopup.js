import React from "react";
import "./Popup.css";

function WarningPopup(props) {
  const submitHandler = (e) => {
    props.onClick(false);
  };

  if (!props.open) return null;
  else
    return ReactDOM.createPortal(
      <>
        <div
          className="modal-overlay"
          onClick={() => {
            props.onClick(false);
          }}
        />
        <div className="modal">
          <h1>{props.title}</h1>
          <button className="slide" onClick={submitHandler}>
            Ok
          </button>
        </div>
      </>,
      document.getElementById("portal")
    );
}

export default WarningPopup;
