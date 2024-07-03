import React from "react";
import x from "../../assets/images/multiply.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import SideNavbar from "./SideNavbar";

const SidebarMenu = () => {
  return (
    <section className="Side-bar">
      <div className="container">
        <div className="top">
          <div className="x-icon">
            <img src={x} alt="x-icon" />
          </div>
          <div className="sidenav">
            <SideNavbar/>
            <p className="title">account</p>
          </div>
        </div>
        <div className="icon">
          <span></span>
          <FontAwesomeIcon className="instaIcon" icon={faInstagram} />
        </div>
      </div>
    </section>
  );
};

export default SidebarMenu;
