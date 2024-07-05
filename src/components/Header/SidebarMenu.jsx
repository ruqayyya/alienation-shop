import React, { useContext, useEffect } from "react";
import x from "../../assets/images/multiply.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import SideNavbar from "./SideNavbar";
import { MainContext } from "../../utils/MainContext";
import "aos/dist/aos.css";
import AOS from "aos";

const SidebarMenu = () => {
  const { toggleSidebar, showSidebar } = useContext(MainContext);

  useEffect(() => {
    AOS.init({
      duration: 200, 
      easing: "ease-in-out", 
      once: true, 
    });
  });
  return (
    <section
    className='Side-bar' 
    data-aos={showSidebar ? "fade-right" : "fade-left"}
    data-aos-offset="300"
    data-aos-easing="easer"
    >
      <div className="container">
        <div className="top">
          <div
            className="x-icon"
            data-aos="fade-right"
            data-aos-offset="400"
            data-aos-easing="easer"
            data-aos-duration="400"
          >
            <img src={x} alt="x-icon" onClick={toggleSidebar} />
          </div>
          <div className="sidenav">
            <SideNavbar />
            <p className="title">account</p>
          </div>
        </div>
        <div
          className="icon"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="600"
        >
          <span></span>
          <FontAwesomeIcon className="instaIcon" icon={faInstagram} />
        </div>
      </div>
    </section>
  );
};

export default SidebarMenu;
