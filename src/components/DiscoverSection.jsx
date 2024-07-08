import React from "react";
import discoverimage from "../assets/images/discoversection.webp";
import secondimage from "../assets/images/holo_hoodies_homepage_moble_x800.webp";

const DiscoverSection = () => {
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
        <button className="discoverbutton" data-aos="fade-up"data-aos-duration="1100">you discover</button>
      </div>
    </section>
  );
};

export default DiscoverSection;
