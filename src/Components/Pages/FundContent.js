import React, { useState } from "react";
import img1 from "./FundImg/1.png";
import img2 from "./FundImg/2.png";
import img3 from "./FundImg/3.png";
import img4 from "./FundImg/4.png";
import img5 from "./FundImg/5.png";
import img6 from "./FundImg/6.png";
import img7 from "./FundImg/7.png";
import img8 from "./FundImg/8.png";
import img9 from "./FundImg/9.png";
import img10 from "./FundImg/10.png";
import img11 from "./FundImg/11.png";
import img12 from "./FundImg/12.png";
import img13 from "./FundImg/13.png";
import img14 from "./FundImg/14.png";
import img15 from "./FundImg/15.png";
import img16 from "./FundImg/16.png";
import img17 from "./FundImg/17.png";
import img18 from "./FundImg/18.png";
import img19 from "./FundImg/19.png";
import img20 from "./FundImg/20.png";
import img21 from "./FundImg/21.png";
import img22 from "./FundImg/22.png";
import img23 from "./FundImg/23.png";
import img24 from "./FundImg/24.png";
import img25 from "./FundImg/25.png";
import img26 from "./FundImg/26.png";

import firebase from "firebase/app";
import "./FundContent.css";

function FundContent(props) {
  const [currentAns, setcurrentAns] = useState("");
  const [error, seterror] = useState("");
  const ansList = [
    "londonschoolofeconomics",
    "internationalstudentvisaadviceteam",
    "bhandhanbank",
    "sidneywebbhouse",
    "matic",
    "twozerozeroeighttwozerotwozero",
    "deutschebank",
    "invertedheadandshoulder",
    "twothreepointtwofive",
    "ruleofseventwo",
    "sovereigngoldbond",
    "nationalinstituteofinformationtechnology",
    "bmwtwotwozerodmsport",
    "zeropointfour",
  ];
  var database = firebase.database().ref();

  function SortQues(props1) {
    switch (props1.index) {
      case 0:
        return (
          <div>
            <img src={img2} alt="Image" className="img-box-fund" />
          </div>
        );
      case 1:
        return (
          <div>
            <img src={img3} alt="Image" className="img-box-fund" />
          </div>
        );
      case 2:
        return (
          <div className="bruh">
            <img src={img4} alt="Image" className="img-box-fund" />
            <img src={img5} alt="Image" className="img-box-fund" />
            <img src={img6} alt="Image" className="img-box-fund" />
          </div>
        );
      case 3:
        return (
          <div className="bruh">
            <img src={img7} alt="Image" className="img-box-fund" />
            <img src={img8} alt="Image" className="img-box-fund" />
          </div>
        );
      case 4:
        return (
          <div>
            <img src={img9} alt="Image" className="img-box-fund" />
          </div>
        );
      case 5:
        return (
          <div>
            <img src={img10} alt="Image" className="img-box-fund" />
          </div>
        );
      case 6:
        return (
          <div className="bruh">
            <img src={img11} alt="Image" className="img-box-fund" />
            <img src={img12} alt="Image" className="img-box-fund" />
          </div>
        );
      case 7:
        return (
          <div className="bruh">
            <img src={img13} alt="Image" className="img-box-fund" />
            <img src={img14} alt="Image" className="img-box-fund" />
          </div>
        );
      case 8:
        return (
          <div className="bruh">
            <img src={img15} alt="Image" className="img-box-fund" />
            <img src={img16} alt="Image" className="img-box-fund" />
            <img src={img17} alt="Image" className="img-box-fund" />
          </div>
        );
      case 9:
        return (
          <div>
            <img src={img18} alt="Image" className="img-box-fund" />
          </div>
        );
      case 10:
        return (
          <div>
            <img src={img19} alt="Image" className="img-box-fund" />
          </div>
        );
      case 11:
        return (
          <div>
            <img src={img20} alt="Image" className="img-box-fund" />
          </div>
        );
      case 12:
        return (
          <div className="bruh">
            <img src={img21} alt="Image" className="img-box-fund" />
            <img src={img22} alt="Image" className="img-box-fund" />
            <img src={img23} alt="Image" className="img-box-fund" />
            <img src={img24} alt="Image" className="img-box-fund" />
          </div>
        );
      case 13:
        return (
          <div className="bruh">
            <img src={img25} alt="Image" className="img-box-fund" />
            <img src={img26} alt="Image" className="img-box-fund" />
          </div>
        );
    }
  }

  const submitHandler = () => {
    setcurrentAns("");
    if (currentAns === ansList[props.location.state.index]) {
      database
        .child(localStorage.getItem("email"))
        .child("ques-fund")
        .set(props.location.state.index + 1);
      if (props.location.state.index !== 13)
        props.history.push({
          pathname: "/fund-content",
          state: { index: props.location.state.index + 1 },
        });
      else
        props.history.push({
          pathname: "/fundamentals",
          state: { index: props.location.state.index + 1 },
        });
      seterror("");
    } else seterror("Incorrect Answer");
  };

  const changeHandler = (e) => {
    setcurrentAns(e.target.value.toString().toLowerCase().trim());
    console.log(currentAns);
  };
  return (
    <div className="main-cont-fund">
      <div className="main-card">
        {<SortQues index={props.location.state.index} />}
      </div>
      <div className="cont">
        <input
          type="text"
          className="field1"
          onChange={changeHandler}
          value={currentAns}
        ></input>
        <button className="slidecont-alt" onClick={submitHandler}>
          Submit
        </button>
      </div>
      <button
        className="slidehome1"
        onClick={() => {
          props.history.replace("/fundamentals");
        }}
      >
        Home
      </button>
    </div>
  );
}

export default FundContent;
