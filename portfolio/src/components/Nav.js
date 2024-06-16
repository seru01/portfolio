import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
const Nav = () => {
  return (
    <div className="Nav">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/reynald-bartiana-58a523260/">
            <FontAwesomeIcon icon={faLinkedin} className="NavIcon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/seru01">
            <FontAwesomeIcon icon={faGithub} className="NavIcon" />
          </a>
        </li>
        <li>
          <a href="https://app.daily.dev/seru01">
            <FontAwesomeIcon icon={faDev} className="NavIcon" />
          </a>
        </li>
        <li>
          <a href="#Contact_info_Content">
            <FontAwesomeIcon icon={faXTwitter} className="NavIcon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
