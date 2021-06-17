import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "./Fundamentals.css";

function Fundamentals(props) {
  var database = firebase.database().ref();
  useEffect(() => {
    if (localStorage.getItem("loggedIn") !== "true") {
      props.history.replace("/signin");
    }
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
      .child("ques-fund")
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
            .child("ques-fund")
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
      <h1 className="event-title">Fundamentals</h1>

      <h2 className="loggedIn">
        You are logged in as <b>{localStorage.getItem("email").toString()}</b>
      </h2>
      <div>
        <button className="slideout" onClick={logOutHandler}>
          Log Out
        </button>
        <button className="slidecont" onClick={pushHandler}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default Fundamentals;
