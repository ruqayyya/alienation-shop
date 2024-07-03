import React from "react";
import x from "../../assets/images/multiply.png";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const SidebarMenu = () => {
  return (
    <section className="Side-bar">
      <div className="container">
        <div className="x-icon">
          <img src={x} alt="x-icon" />
        </div>
        <div className="sidenav">
          <Navbar />
        <span className="title">account</span>
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
