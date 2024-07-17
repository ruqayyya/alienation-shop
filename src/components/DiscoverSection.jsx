import React, { useEffect } from "react";
import discoverimage from "../assets/images/discoversection.webp";
import secondimage from "../assets/images/holo_hoodies_homepage_moble_x800.webp";
import "aos/dist/aos.css";
import AOS from "aos";
import { NavLink } from "react-router-dom";
const DiscoverSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section className="discover-section">
      <div className="container">
        <div
          className="discoverimage"
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          <img  className="first-image" src={discoverimage} alt="discoverimage" />
          <img className="second-image" src={secondimage} alt="secondimage" />
        </div>
        <NavLink to={'/categories'}>
        <button className="discoverbutton" data-aos="fade-up"data-aos-duration="1000">you discover</button>
        </NavLink>
      </div>
    </section>
  );
};

export default DiscoverSection;
