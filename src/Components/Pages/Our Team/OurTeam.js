import React from "react";
import img1 from "../OurTeamImgs/1.png";
import img2_1 from "../OurTeamImgs/2_1.png";
import img2_2 from "../OurTeamImgs/2_2.png";
import img2_3 from "../OurTeamImgs/2_3.png";
import img2_4 from "../OurTeamImgs/2_4.png";
import img3_1 from "../OurTeamImgs/3_1.png";
import img3_2 from "../OurTeamImgs/3_2.png";
import img3_3 from "../OurTeamImgs/3_3.png";
import img3_4 from "../OurTeamImgs/3_4.png";
import img4_1 from "../OurTeamImgs/4_1.png";
import img4_2 from "../OurTeamImgs/4_2.png";
import img4_3 from "../OurTeamImgs/4_3.png";
import img4_4 from "../OurTeamImgs/4_4.png";
import img5_1 from "../OurTeamImgs/5_1.png";
import img5_2 from "../OurTeamImgs/5_2.png";
import img5_3 from "../OurTeamImgs/5_3.png";
import img5_4 from "../OurTeamImgs/5_4.png";
import img6_1 from "../OurTeamImgs/6_1.png";
import img6_2 from "../OurTeamImgs/6_2.png";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
import "./OurTeam.css";

function OurTeam() {
  return (
    <div className="main-cont-team">
      <div className="rows-div">
        <div className="wrapper">
          <div className="card-team">
            Saiyam Sanghi
            <div className="phone-num">
              <PhoneIcon
                fontSize="large"
                style={{ marginRight: "8px", color: "rgb(54, 223, 104)" }}
              />
              +91 7718875442
            </div>
            <div>
              <a href="https://www.linkedin.com/in/saiyam-sanghvi-5613241b1">
                <LinkedInIcon fontSize="large" className="icon-in" />
              </a>
              <MailIcon fontSize="large" className="icon-mail" />
            </div>
          </div>
          <img className="team-img" src={img1} alt="Person🍙"></img>
        </div>
      </div>

      {/* //!2nd row */}

      <div className="rows-div">
        <div className="wrapper-2">
          <div className="card-team">
            Khushi Murpana
            <div className="phone-num">
              <PhoneIcon
                fontSize="large"
                style={{ marginRight: "8px", color: "rgb(54, 223, 104)" }}
              />
              +91 99207 71097
            </div>
            <div>
              <a href="https://www.linkedin.com/in/kirti-kapai-2a09231a8">
                <LinkedInIcon fontSize="large" className="icon-in" />
              </a>
              <MailIcon fontSize="large" className="icon-mail" />
            </div>
          </div>
          <img className="team-img" src={img3_4} alt="Person🍙"></img>
        </div>

        <div className="wrapper-3">
          <div className="card-team">
            Priyanshi Tenjani
            <div className="phone-num">
              <PhoneIcon
                fontSize="large"
                style={{ marginRight: "8px", color: "rgb(54, 223, 104)" }}
              />
              +91 98338 61310
            </div>
            <div>
              <a href="https://www.linkedin.com/in/priyanshi-tejnani-78664a1a5">
                <LinkedInIcon fontSize="large" className="icon-in" />
              </a>
              <MailIcon fontSize="large" className="icon-mail" />
            </div>
          </div>
          <img className="team-img" src={img4_3} alt="Person🍙"></img>
        </div>

        <div className="wrapper">
          <div className="card-team">
            Prithvi Jain
            <div className="phone-num">
              <PhoneIcon
                fontSize="large"
                style={{ marginRight: "8px", color: "rgb(54, 223, 104)" }}
              />
              +91 77159 07702
            </div>
            <div>
              <a href="https://www.linkedin.com/in/prithvi-jain04">
                <LinkedInIcon fontSize="large" className="icon-in" />
              </a>
              <MailIcon fontSize="large" className="icon-mail" />
            </div>
          </div>
          <img className="team-img" src={img2_3} alt="Person🍙"></img>
        </div>

        <div className="wrapper-4">
          <div className="card-team">
            Vandana Hemdev
            <div className="phone-num">
              <PhoneIcon
                fontSize="large"
                style={{ marginRight: "8px", color: "rgb(54, 223, 104)" }}
              />
              +91 83697 38660
            </div>
            <div>
              <a href="https://www.linkedin.com/in/vandanahemdev">
                <LinkedInIcon fontSize="large" className="icon-in" />
              </a>
              <MailIcon fontSize="large" className="icon-mail" />
            </div>
          </div>
          <img className="team-img" src={img5_4} alt="Person🍙"></img>
        </div>
      </div>

      <div className="rows-div">
        <div className="wrapper">
          <div className="card-team">
            Harsh Jalan
            <div className="phone-num">
              <PhoneIcon
                fontSize="large"
                style={{ marginRight: "8px", color: "rgb(54, 223, 104)" }}
              />
              +91 7310259943
            </div>
            <div>
              <a href="https://www.linkedin.com/in/harsha-jalan-b53b8b1a0">
                <LinkedInIcon fontSize="large" className="icon-in" />
              </a>
              <MailIcon fontSize="large" className="icon-mail" />
            </div>
          </div>
          <img className="team-img" src={img2_1} alt="Person🍙"></img>
        </div>
        <div className="wrapper">
          <div className="card-team">
            Richa D'Silva
            <div className="phone-num">
              <PhoneIcon
                fontSize="large"
                style={{ marginRight: "8px", color: "rgb(54, 223, 104)" }}
              />
              +91 97694 67416
            </div>
            <div>
              <a href="https://www.linkedin.com/in/richa-dsilva-6757291b4">
                <LinkedInIcon fontSize="large" className="icon-in" />
              </a>
              <MailIcon fontSize="large" className="icon-mail" />
            </div>
          </div>
          <img className="team-img" src={img2_2} alt="Person🍙"></img>
        </div>
        <div className="wrapper-4">
          <div className="card-team">
            Shubham Lalwani
            <div className="phone-num">
              <PhoneIcon
                fontSize="large"
                style={{ marginRight: "8px", color: "rgb(54, 223, 104)" }}
              />
              +91 77971 30405
            </div>
            <div>
              <a href="https://www.linkedin.com/in/shubham-lalwani-26812a1b6">
                <LinkedInIcon fontSize="large" className="icon-in" />
              </a>
              <MailIcon fontSize="large" className="icon-mail" />
            </div>
          </div>
          <img className="team-img" src={img5_1} alt="Person🍙"></img>
        </div>
        <div className="wrapper-3">
          <div className="card-team">
            Ritvik Devnani
            <div className="phone-num">
              <PhoneIcon
                fontSize="large"
                style={{ marginRight: "8px", color: "rgb(54, 223, 104)" }}
              />
              +91 79729 43847
            </div>
            <div>
              <a href="https://www.linkedin.com/in/ritvik-devnani-9a9792197">
                <LinkedInIcon fontSize="large" className="icon-in" />
              </a>
              <MailIcon fontSize="large" className="icon-mail" />
            </div>
          </div>
          <img className="team-img" src={img4_4} alt="Person🍙"></img>
        </div>
      </div>

      <div className="rows-div">
        <div className="wrapper-2">
          <div className="card-team">
            Hemaangi Bhat
            <div className="phone-num">
              <PhoneIcon
                fontSize="large"
                style={{ marginRight: "8px", color: "rgb(54, 223, 104)" }}
              />
              +91 98698 56840
            </div>
            <div>
              <a href="https://www.linkedin.com/in/hemaangi-bhat-6a433b1aa">
                <LinkedInIcon fontSize="large" className="icon-in" />
              </a>
              <MailIcon fontSize="large" className="icon-mail" />
            </div>
          </div>
          <img className="team-img" src={img3_3} alt="Person🍙"></img>
        </div>
        <div className="wrapper-2">
          <div className="card-team">
            Adit Shahani
            <div className="phone-num">
              <PhoneIcon
                fontSize="large"
                style={{ marginRight: "8px", color: "rgb(54, 223, 104)" }}
              />
              +91 89494 77378
            </div>
            <div>
              <a href="https://www.linkedin.com/in/adit-shahani-344605209">
                <LinkedInIcon fontSize="large" className="icon-in" />
              </a>
              <MailIcon fontSize="large" className="icon-mail" />
            </div>
          </div>
          <img className="team-img" src={img3_1} alt="Person🍙"></img>
        </div>
        <div className="wrapper-3">
          <div className="card-team">
            Nikita Menghani
            <div className="phone-num">
              <PhoneIcon
                fontSize="large"
                style={{ marginRight: "8px", color: "rgb(54, 223, 104)" }}
              />
              +91 98335 80297
            </div>
            <div>
              <a href="https://www.linkedin.com/in/nikita-menghani-240542198">
                <LinkedInIcon fontSize="large" className="icon-in" />
              </a>
              <MailIcon fontSize="large" className="icon-mail" />
            </div>
          </div>
          <img className="team-img" src={img4_2} alt="Person🍙"></img>
        </div>
        <div className="wrapper-4">
          <div className="card-team">
            Tanisha Asher
            <div className="phone-num">
              <PhoneIcon
                fontSize="large"
                style={{ marginRight: "8px", color: "rgb(54, 223, 104)" }}
              />
              +91 79776 07988
            </div>
            <div>
              <a href="https://www.linkedin.com/in/tanisha-a-a699a01aa">
                <LinkedInIcon fontSize="large" className="icon-in" />
              </a>
              <MailIcon fontSize="large" className="icon-mail" />
            </div>
          </div>
          <img className="team-img" src={img5_3} alt="Person🍙"></img>
        </div>
      </div>

      <div className="rows-div">
        <div className="wrapper-3">
          <div className="card-team">
            Kirti Kapai
            <div className="phone-num">
              <PhoneIcon
                fontSize="large"
                style={{ marginRight: "8px", color: "rgb(54, 223, 104)" }}
              />
              +91 99878 28333
            </div>
            <div>
              <a href="https://www.linkedin.com/in/khushi-murpana-77bb3b1ab">
                <LinkedInIcon fontSize="large" className="icon-in" />
              </a>
              <MailIcon fontSize="large" className="icon-mail" />
            </div>
          </div>
          <img className="team-img" src={img4_1} alt="Person🍙"></img>
        </div>
        <div className="wrapper">
          <div className="card-team">
            Arnav Dubey
            <div className="phone-num">
              <PhoneIcon
                fontSize="large"
                style={{ marginRight: "8px", color: "rgb(54, 223, 104)" }}
              />
              +91 70142 41608
            </div>
            <div>
              <a href="https://www.linkedin.com/in/arnav-dubey-5491aa101">
                <LinkedInIcon fontSize="large" className="icon-in" />
              </a>
              <MailIcon fontSize="large" className="icon-mail" />
            </div>
          </div>
          <img className="team-img" src={img2_4} alt="Person🍙"></img>
        </div>
        <div className="wrapper-2">
          <div className="card-team">
            Darsh Parekh
            <div className="phone-num">
              <PhoneIcon
                fontSize="large"
                style={{ marginRight: "8px", color: "rgb(54, 223, 104)" }}
              />
              +91 97691 49009
            </div>
            <div>
              <a href="https://www.linkedin.com/in/darsh-parekh-991b0115a">
                <LinkedInIcon fontSize="large" className="icon-in" />
              </a>
              <MailIcon fontSize="large" className="icon-mail" />
            </div>
          </div>
          <img className="team-img" src={img3_2} alt="Person🍙"></img>
        </div>
      </div>

      <div className="rows-div">
        <div className="wrapper-5">
          <div className="card-team">
            Sarthak Tyagi
            <div className="phone-num">
              <PhoneIcon
                fontSize="large"
                style={{ marginRight: "8px", color: "rgb(54, 223, 104)" }}
              />
              +91 70210 17037
            </div>
            <div>
              <a href="https://www.linkedin.com/in/sarthak-tyagi-b4a8151aa">
                <LinkedInIcon fontSize="large" className="icon-in" />
              </a>
              <MailIcon fontSize="large" className="icon-mail" />
            </div>
          </div>
          <img className="team-img" src={img6_1} alt="Person🍙"></img>
        </div>
        <div className="wrapper-5">
          <div className="card-team">
            Vishwas Mordani
            <div className="phone-num">
              <PhoneIcon
                fontSize="large"
                style={{ marginRight: "8px", color: "rgb(54, 223, 104)" }}
              />
              +91 97698 80825
            </div>
            <div>
              <a href="https://www.linkedin.com/in/vishwas-mordani-a738a51a7">
                <LinkedInIcon fontSize="large" className="icon-in" />
              </a>
              <MailIcon fontSize="large" className="icon-mail" />
            </div>
          </div>
          <img className="team-img" src={img6_2} alt="Person🍙"></img>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
