import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faFolderOpen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  return (
    <div className="Nav">
      <ul>
        <li>
          <a href="#profileContent">
            <FontAwesomeIcon icon={faAddressCard} className="NavIcon" />
          </a>
        </li>
        <li>
          <a href="#projectContent">
            <FontAwesomeIcon icon={faFolderOpen} className="NavIcon" />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faEnvelope} className="NavIcon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
