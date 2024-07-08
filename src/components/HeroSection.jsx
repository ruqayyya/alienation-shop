import React, { useEffect, useState } from "react";
import heroImage from "../assets/images/sectionimage.webp";
import "aos/dist/aos.css";
import AOS from "aos";
// import { MainContext } from "../utils/MainContext";
// import Loading from "./Loading"; // Yükləmə ekranı komponenti

const HeroSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: "ease-out",
      once: true,
    });

    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
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
