import React, { useState } from "react";
import formalPicture1 from "../images/Formal_C_Picture.jpg";
import formalPicture2 from "../images/Formal_Picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faC,
} from "@fortawesome/free-solid-svg-icons";
import {
  faPython,
  faJs,
  faReact,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";

const MainContent = () => {
  // Project Content Navigation
  const [itemCount, setItemCount] = useState(1);
  const incrementBtn = () => {
    setItemCount((prevCount) => (prevCount === 9 ? 1 : prevCount + 1));
  };
  const decrementBtn = () => {
    setItemCount((prevCount) => (prevCount === 1 ? 9 : prevCount - 1));
  };
  let projectImg;
  let descrptnTitle;
  let descrptnContent;

  switch (itemCount) {
    case 1:
      projectImg = formalPicture1;
      descrptnTitle = "Sentry";
      descrptnContent =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";
      break;
    case 2:
      projectImg = formalPicture2;
      descrptnTitle = "GEO Street Light";
      descrptnContent = (
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
          <br />
          Lorem Ipsum has been the industry's standard dummy
        </span>
      );
      break;
    // Add cases for other itemCount values if needed
    default:
      // Set default values for projectImg, descrptnTitle, and descrptnContent
      break;
  }

  return (
    <div className="MainContent">
      <div class="triangle-down"></div>
      <div class="circle"></div>
      <div class="square"></div>
      <div class="squareNoIn"></div>
      <div class="circleNoIn"></div>
      {/* Profile Info Section */}
      <div className="Card Profile" id="profileContent">
        <div className="imageSection"></div>
        <div className="infoSectiom">
          <div className="infoName">
            <p>Reynald Bartiana &lt;RB/&gt;</p>
          </div>
          <div className="infoTitle">
            <h4>Software Developer / Firmware Engineer</h4>
          </div>
          <div className="infoProgLang">
            <FontAwesomeIcon icon={faC} className="infoProgLangIcon" />
            <FontAwesomeIcon icon={faPython} className="infoProgLangIcon" />
            <FontAwesomeIcon icon={faJs} className="infoProgLangIcon" />
            <FontAwesomeIcon icon={faReact} className="infoProgLangIcon" />
            <FontAwesomeIcon icon={faHtml5} className="infoProgLangIcon" />
            <FontAwesomeIcon icon={faCss3Alt} className="infoProgLangIcon" />
          </div>
          <div className="infoDescription">
            <p>
              Hey there! 👋 I'm a passionate Software Developer based in Las
              Piñas, NCR, Philippines, currently leading the software
              development efforts on an exciting IoT project. My focus is on
              optimizing urban infrastructure using cutting-edge technologies,
              showcasing my technical expertise and commitment to quality
              solutions in dynamic environments. I'm always eager to tackle new
              challenges and collaborate on meaningful projects, so if you're
              passionate about innovation, let's connect and build something
              incredible together! 🚀
            </p>
          </div>
        </div>
      </div>
      {/* Projec Content Section */}
      <div className="projectContent" id="projectContent">
        <div className="prjtNav">
          <button className="prBtnUP" onClick={incrementBtn}>
            <FontAwesomeIcon icon={faChevronUp} className="prNavbtntop" />
          </button>
          <p id="itemCount">{itemCount < 10 ? `0${itemCount}` : itemCount}</p>
          <button className="prBtnDN" onClick={decrementBtn}>
            <FontAwesomeIcon icon={faChevronDown} className="prNavbtnbtm" />
          </button>
        </div>
        <div className="prjtDescrptn">
          <div className="DescrptnTitle">
            <h1>{descrptnTitle}</h1>
          </div>
          <div className="DescrptnContent">{descrptnContent}</div>
        </div>
        <div
          className="projectImg"
          style={{
            width: "50%",
            height: "100%",
            float: "left",
            backgroundImage: `url(${projectImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
          }}
        ></div>
      </div>
      <div className="infofooter">
        <p>
          Reynald Bartiana <br />
          &#169; 2024
          <br />
          0.0.1 v
        </p>
      </div>
      {/* Contact Info Content */}
      {/* <div className="Contact_info_Content" id="Contact_info_Content">
        <div className="ContactTitle">
          <span className="ContactText">CONTACT</span>
        </div>
        <div className="ContactContent">
          <div className="EmailContent">
            <form>
              <div class="form-group">
                <label className="EmailLabel">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="name"
                  required
                ></input>
                <label className="EmailLabel">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="@email.com"
                  required
                ></input>
                <label className="EmailLabel">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="message.."
                  required
                ></textarea>
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
          <div className="LocationContent">

          </div>
          <div className="SocialContent"></div>
        </div>
      </div> */}
    </div>
  );
};

export default MainContent;
