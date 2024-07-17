import React, { useEffect } from "react";
import blow from "../assets/images/blovjob.webp";
import gif from "../assets/images/gif-email-ezgif.com-optimize_x800.gif";
import "aos/dist/aos.css";
import AOS from "aos";
import { NavLink } from "react-router-dom";

const BlowJobSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="blow-section">
      <div className="container">
        <div className="overlay"></div>
        <div
          className="blow-img"
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          <img className="blow" src={blow} alt="blovsection" />
          <img className="gif" src={gif} alt="gif" />
        </div>
        <div className="bottom-part">
          <div className="title" data-aos="fade-up" data-aos-duration="1100">
            BLOWJOB TEE
          </div>
          <NavLink to={'/categories'}>
          <button data-aos="fade-up" data-aos-duration="1200">
            find out now
          </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default BlowJobSection;
