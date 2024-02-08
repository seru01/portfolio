import React from "react";

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
            <h2>Reynald Bartiana</h2>
          </div>
          <div className="infoTitle">
            <h4>Software Developer / Firmware Engineer</h4>
          </div>
          <div className="infoProgLang"></div>
          <div className="infoDescription">
            <p>lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
