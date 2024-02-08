import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faJs,
  faReact,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";

const Maincontent = () => {
  return (
    <div className="MainContent">
      <div class="triangle-down"></div>
      <div class="circle"></div>
      <div class="square"></div>

      <div className="Card Profile">
        <div className="imageSection"></div>
        <div className="infoSectiom">
          <div className="infoName">
            <h1>Reynald Bartiana</h1>
          </div>
          <div className="infoTitle">
            <h4>Software Developer / Firmware Engineer</h4>
          </div>
          <div className="infoProgLang">
            <FontAwesomeIcon icon={faPython} className="infoProgLangIcon" />
            <FontAwesomeIcon icon={faJs} className="infoProgLangIcon" />
            <FontAwesomeIcon icon={faReact} className="infoProgLangIcon" />
            <FontAwesomeIcon icon={faHtml5} className="infoProgLangIcon" />
            <FontAwesomeIcon icon={faCss3Alt} className="infoProgLangIcon" />
          </div>
          <div className="infoDescription">
            <p>lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
