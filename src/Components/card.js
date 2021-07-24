import React from "react";

import "./card.css";
import "../App";
import { ques } from "../ques";

function Card(props) {
  const clickhandler = (to) => {
    props.setquestionstate(to);
  };
  return (
    <div className="card-container">
      <h1 className="ques">Q. {ques.get(props.question)["question"]}</h1>

      {ques.get(props.question)["options"].map((option, index) => {
        return (
          <div key={Math.random() * 1000}>
            <button className="btn" onClick={() => clickhandler(option.goesTo)}>
              {option.ans}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
