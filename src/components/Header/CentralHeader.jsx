import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons"; // Solid iconlar için
import logo from "../../assets/images/image.png";

const CentralHeader = () => {
  return (
    <div className="central-header">
      <div className="container row">
        {/* <div className="burger">
          <FontAwesomeIcon icon={faBars} />
        </div> */}
        <div className="img">
          <img src={logo} alt="logo" />
        </div>
        <nav className="navbar">
          <ul className="navlist">
            <li className="navitem">MAN</li>
            <li className="navitem">WOMAN</li>
            <li className="navitem">WHO WE ARE</li>
            <li className="navitem">RETURNS AND EXCHANGES</li>
            <li className="navitem">DOWNLOAD APP</li>
            <li className="navitem">REVIEWS</li>
          </ul>
        </nav>
        <div className="icons">
          <FontAwesomeIcon className="user" icon={faUser} />
          <FontAwesomeIcon className="search" icon={faMagnifyingGlass} />
          <FontAwesomeIcon icon={faBagShopping} />
        </div>
      </div>
    </div>
  );
};

export default CentralHeader;
