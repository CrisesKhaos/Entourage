import React from "react";
import "./Popups.css";
import ReactDOM from "react-dom";

function Popup(props) {
  if (!props.open) return null;
  else
    return ReactDOM.createPortal(
      <>
        <div className="modal-overlay" onClick={() => props.onClick(false)} />
        <div className="modal">bruh</div>
      </>,
      document.getElementById("portal")
    );
}

export default Popup;
