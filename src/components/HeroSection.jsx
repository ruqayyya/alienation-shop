import React, { useEffect, useState } from "react";
import heroImage from "../assets/images/sectionimage.webp";
import "aos/dist/aos.css";
import AOS from "aos";

const HeroSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="heroimage" data-aos="zoom-out" data-aos-duration="1000">
          <img src={heroImage} alt="heroImage" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
