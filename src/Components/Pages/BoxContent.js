import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./BoxContent.css";
import img2_1 from "./BoxImg/Box1_1.jpg";
import img2_2 from "./BoxImg/Box1_2.jpg";
import img3 from "./BoxImg/Box3.jpg";
import img4 from "./BoxImg/Box4.jpg";
import img5_1 from "./BoxImg/Box5_1.PNG";
import img5_2 from "./BoxImg/Box5_2.PNG";
import img6_1 from "./BoxImg/Box6_1.png";
import img6_2 from "./BoxImg/Box6_2.png";
import img6_3 from "./BoxImg/Box6_3.png";
import img6_4 from "./BoxImg/Box6_4.png";
import img6_5 from "./BoxImg/Box6_5.png";
import img7_1 from "./BoxImg/Box7_1.png";
import img7_2 from "./BoxImg/Box7_2.png";
import img7_3 from "./BoxImg/Box7_3.png";
import img7_4 from "./BoxImg/Box7_4.png";
import img7_5 from "./BoxImg/Box7_5.png";
import Popup from "../Popup/Popup";

function BoxContent(props) {
  const [popupOpen, setpopupOpen] = useState(false);
  const [auth, setauth] = useState(false);
  const [next, setnext] = useState(false);
  useEffect(() => {
    setauth(false);
    setnext(false);
  }, [auth]);
  console.log(auth);
  function Sort(props1) {
    switch (props1.index) {
      default:
        return <div>index Error</div>;
      case 0:
        return (
          <div>
            <iframe
              title="intro"
              src="https://drive.google.com/file/d/1XnlchQeX5ve9cAkDKSX3ILPtW2sT7DXP/preview"
              width="800px"
              height="1000px"
              allow="autoplay"
            ></iframe>
          </div>
        );
      case 1:
        return (
          <div className="img-container">
            <h1>Financial Statements of the Company</h1>
            <img className="img-box" src={img2_1} alt="nancy drew content" />
            <img src={img2_2} className="img-box" alt="nancy drew content" />
          </div>
        );
      case 2:
        return (
          <div className="img-container">
            <h1>Competitors Statements</h1>
            <img className="img-box" src={img3} alt="nancy drew content" />
          </div>
        );
      case 3:
        return (
          <div className="img-container">
            <h1>Purchase List</h1>
            <img className="img-box-alt" src={img4} alt="Drew Cont" />
          </div>
        );
      case 4:
        return (
          <div className="img-container">
            <h1>Email</h1>
            <img className="img-box-alt" src={img5_1} alt="Drew Cont" />
            <img className="img-box-alt" src={img5_2} alt="Drew Cont" />
          </div>
        );
      case 5:
        return (
          <div className="img-container">
            <h1>Voucher</h1>
            <img className="img-box-alt" src={img6_1} alt="Drew Cont" />
            <img className="img-box-alt" src={img6_2} alt="Drew Cont" />
            <img className="img-box-alt" src={img6_3} alt="Drew Cont" />
            <img className="img-box-alt" src={img6_4} alt="Drew Cont" />
            <img className="img-box-alt" src={img6_5} alt="Drew Cont" />
          </div>
        );
      case 6:
        return (
          <div className="img-container">
            <h1>Delivery Challan</h1>
            <img className="img-box-alt" src={img7_1} alt="Drew Cont" />
            <img className="img-box-alt" src={img7_2} alt="Drew Cont" />
            <img className="img-box-alt" src={img7_3} alt="Drew Cont" />
            <img className="img-box-alt" src={img7_4} alt="Drew Cont" />
            <img className="img-box-alt" src={img7_5} alt="Drew Cont" />
          </div>
        );
    }
  }

  if (!auth)
    return (
      <div className="main-cont-fund">
        <Popup
          pass={true}
          onClick={setpopupOpen}
          open={popupOpen}
          inScene={true}
          setAuth={setauth}
        />
        <div className="card">
          {<Sort index={props.location.state.index} />}
        </div>

        <div className="btns">
          <div className="row-div-fund">
            <button
              className="slidebck"
              onClick={() => {
                if (props.location.state.index !== 0) {
                  setnext(false);
                  if (
                    props.location.state.index - 1 === 4 ||
                    props.location.state.index - 1 === 5
                  ) {
                    setpopupOpen(true);
                    console.log("bruh");
                  } else
                    props.history.replace({
                      pathname: "/box-content",
                      state: { index: props.location.state.index - 1 },
                    });
                } else props.history.replace("/nancy-home");
              }}
            >
              Back
            </button>
            <button
              className="slidenext"
              onClick={() => {
                if (props.location.state.index !== 6) {
                  setnext(true);
                  if (
                    props.location.state.index + 1 === 4 ||
                    props.location.state.index + 1 === 5
                  ) {
                    setpopupOpen(true);
                    console.log("bruh");
                  } else
                    props.history.replace({
                      pathname: "/box-content",
                      state: { index: props.location.state.index + 1 },
                    });
                } else props.history.replace("/nancy-home");
              }}
            >
              Next
            </button>
          </div>
        </div>
        <button
          className="slidehome"
          onClick={() => {
            props.history.replace("/nancy-home");
          }}
        >
          Home
        </button>
      </div>
    );
  else
    return (
      <Redirect
        to={{
          pathname: "/box-content",
          state: {
            index: next
              ? props.location.state.index + 1
              : props.location.state.index - 1,
          },
        }}
      />
    );
}

export default BoxContent;
