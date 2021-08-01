import React, { useState, useEffect } from "react";
import "../card.css";
import firebase from "firebase/app";
import "firebase/database";
import firebaseConfig from "../../Config";
import "./Login.css";
import "../../index.css";
function Login(props) {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [wrong, setwrong] = useState("");
  var database = firebase.database().ref();

  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "true") {
      props.history.push({
        pathname: "/fundamentals",
        state: { auth: true },
      });
    }
  }, []);

  const emailchangeHandler = (e) => {
    setemail(e.target.value);
  };
  const passchangeHandler = (e) => {
    setpass(e.target.value);
  };

  const submitHandler = (e) => {
    database
      .child(email)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setwrong("");
          if (snapshot.child("pass").val() === pass) {
            if (snapshot.child("loggedIn").val() === true) {
              setwrong("Uh,oh! Someones already logged in with this account");
            } else {
              localStorage.setItem("loggedIn", true);
              localStorage.setItem("email", email);
              database.child(email).child("loggedIn").set(true);
              props.history.push({
                pathname: "/fundamentals",
                state: { auth: true },
              });
            }
          } else {
            setwrong("Please enter a valid password!");
          }
        } else {
          setwrong("Plese enter a valid E-Mail");
          console.log(wrong);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="center">
      <h className="tag">Email</h>
      <input
        type="text"
        className="field-log"
        onChange={emailchangeHandler}
      ></input>
      <h className="tag">Password</h>
      <input
        type="text"
        className="field-log"
        onChange={passchangeHandler}
      ></input>
      <p className="wrong-log">{wrong}</p>
      <button className="slide" onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
}

export default Login;
