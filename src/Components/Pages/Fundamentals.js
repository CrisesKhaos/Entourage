import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "./Fundamentals.css";
import img1 from "./Fundamental Pre/1.png";
import img2 from "./Fundamental Pre/2.png";

function Fundamentals(props) {
  var database = firebase.database().ref();
  const [isAdmin, setisAdmin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("loggedIn") !== "true") {
      props.history.replace("/signin");
    }
    database
      .child(localStorage.getItem("email"))
      .child("isAdmin")
      .get()
      .then((snapshot) => {
        if (snapshot.exists && snapshot.val()) {
          setisAdmin(true);
          console.log(snapshot.val());
        }
      });
  }, []);

  const pushHandler = (e) => {
    database
      .child(localStorage.getItem("email"))
      .child("timestamp")
      .get()
      .then((snapshot) => {
        if (!snapshot.exists()) {
          database
            .child(localStorage.getItem("email"))
            .child("timestamp")
            .set(firebase.database.ServerValue.TIMESTAMP);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    database
      .child(localStorage.getItem("email"))
      .child("ques_fund")
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          props.history.push({
            pathname: "/fund-content",
            state: { index: snapshot.val() },
          });
        } else {
          database
            .child(localStorage.getItem("email"))
            .child("ques_fund")
            .set(0);
          props.history.push({
            pathname: "/fund-content",
            state: { index: 0 },
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const logOutHandler = (e) => {
    database.child(localStorage.getItem("email")).child("loggedIn").set(false);
    localStorage.clear();
    props.history.push("/events");
  };

  return (
    <div className="main-container1">
      <div className="main-card">
        <img src={img1} alt="lander" className="img-box-fund" />
        <img src={img2} alt="lander" className="img-box-fund" />

        <h3 className="loggedIn">
          You are logged in as <b>{localStorage.getItem("email").toString()}</b>
        </h3>
        <div className="btns">
          <button className="slideout" onClick={logOutHandler}>
            Log Out
          </button>
          <button className="slidecont" onClick={pushHandler}>
            Continue
          </button>
          {isAdmin ? (
            <button
              className="slidehome1"
              onClick={() => {
                props.history.push({
                  pathname: "/admin",
                  state: { isAdmin: true },
                });
              }}
            >
              Admin
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Fundamentals;
