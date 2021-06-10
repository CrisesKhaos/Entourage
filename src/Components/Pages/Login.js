import React, { useState } from "react";
import "../card.css";
import firebase from "firebase/app";
import "firebase/database";
import firebaseConfig from "../../Config";
import "./Login.css";
import Navbar from "../Navbar/Navbar";
import "../../index.css";
function Login(props) {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [wrong, setwrong] = useState("");
  var database = firebase.database().ref();

  const emailchangeHandler = (e) => {
    setemail(e.target.value);
  };
  const passchangeHandler = (e) => {
    setpass(e.target.value);
  };

  const submitHandler = (e) => {
    database
      .child(email.toLowerCase())
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setwrong("");
          if (snapshot.child("pass").val() === pass) {
            props.history.push({
              pathname: "/home",
              state: { auth: true },
            });
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
        className="field"
        onChange={emailchangeHandler}
      ></input>
      <h className="tag">Password</h>
      <input type="text" className="field" onChange={passchangeHandler}></input>
      <p className="wrong">{wrong}</p>
      <button className="slide" onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
}

export default Login;
