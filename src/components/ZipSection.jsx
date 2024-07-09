import blow from "../assets/images/zipsection.jpg";
import gif from '../assets/images/zipGif.webp'
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
const ZipSection = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <section className="zip-section">
      <div className="container">
        <div className="zip-img" data-aos="zoom-out" data-aos-duration="1000">
          <img  className="zip" src={blow} alt="blovsection" />
          <img className="gif" src={gif} alt="gif" />
        </div>
        <div className="bottom-part">
          <div className="title" data-aos="fade-up" data-aos-duration="1100">back zip</div>
          <button data-aos="fade-up"data-aos-duration="1200">you discover</button>
        </div>
      </div>
    </section>
  );
};

export default ZipSection;
