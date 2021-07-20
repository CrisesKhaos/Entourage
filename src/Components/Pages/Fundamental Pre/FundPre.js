import React from "react";
import img1 from "./1.png";
import img2 from "./2.png";
function FundPre() {
  return (
    <div className="main-cont-fund">
      <div className="main-card">
        <img src={img1} alt="lander" className="img-box-fund" />
        <img src={img2} alt="lander" className="img-box-fund" />
        <button className="slidecont" onClick={pushHandler}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default FundPre;
