import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/database";
import { Redirect } from "react-router-dom";

import { Button, TextField } from "@material-ui/core";
import "./Admin.css";
function Admin(props) {
  const db = firebase.database().ref();

  const [data, setdata] = useState({});
  const [mail, setmail] = useState("");
  const [name, setname] = useState("");
  const [pass, setpass] = useState("");

  useEffect(() => {
    if (props.location.state.isAdmin) {
      db.on("value", (snapshot) => {
        setdata(snapshot.val());
      });
    } else {
      <Redirect to="/" />;
    }
  }, []);

  const submitHandler = () => {
    if (mail && name && pass) {
      db.child(mail).set({ pass: pass, name: name, loggedIn: false });
      setmail("");
      setname("");
      setpass("");
    }
  };
  return (
    <div className="main-cont-fund">
      <div className="main-card">
        <div className="admin-div-header">
          <div>Mail</div>
          <div>Name</div>
          <div>Pass</div>
        </div>
        {Object.keys(data).map((key) => {
          return (
            <div className="admin-div" key={key}>
              <div>{key}</div>
              <div>{data[key].name}</div>
              <div>{data[key].pass}</div>
            </div>
          );
        })}

        <div className="admin-div-set">
          <TextField
            variant="filled"
            color="secondary"
            style={{ margin: "10px" }}
            value={mail}
            onChange={(e) => {
              setmail(e.target.value);
            }}
            label="Enter the users E-mail"
            placeholder="Don not add `.com`"
          />
          <TextField
            variant="filled"
            color="secondary"
            style={{ margin: "10px" }}
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            label="Enter the users name"
          />
          <TextField
            color="secondary"
            variant="filled"
            style={{ margin: "10px" }}
            value={pass}
            onChange={(e) => {
              setpass(e.target.value);
            }}
            label="Enter the pass"
          />
        </div>

        <Button
          style={{ margin: "10px" }}
          onClick={submitHandler}
          color="secondary"
          variant="contained"
        >
          Add user
        </Button>
      </div>
    </div>
  );
}

export default Admin;
