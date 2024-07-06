import React from "react";
import heroImage from "../assets/images/sectionimage.webp";
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="heroimage">
          <img src={heroImage} alt="heroImage" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
