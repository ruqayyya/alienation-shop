import React, { useEffect, useState } from "react";
import blow from "../assets/images/blovjob.webp";
import gif from '../assets/images/gif-email-ezgif.com-optimize_x800.gif'
import "aos/dist/aos.css";
import AOS from "aos";
const BlowJobSection = () => {
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
    <section className="blow-section">
      <div className="container">
        <div className="blow-img" data-aos="zoom-out" data-aos-duration="1000">
          <img  className="blow" src={blow} alt="blovsection" />
          <img className="gif" src={gif} alt="gif" />
        </div>
        <div className="bottom-part">
          <div className="title" data-aos="fade-up" data-aos-duration="1100">BLOWJOB TEE</div>
          <button data-aos="fade-up"data-aos-duration="1100">find out now</button>
        </div>
      </div>
    </section>
  );
};

export default BlowJobSection;
