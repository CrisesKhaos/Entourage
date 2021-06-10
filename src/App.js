import "./App.css";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import ParticleBackround from "./Backround/ParticleBackround";
function App(props) {
  const [questionstate, setquestionstate] = useState("1");

  return (
    <div className="container">
      <p className="title">E-ntourage` 21</p>
      <h className="slogan">Survive to Revive</h>
    </div>
  );
}

export default App;
