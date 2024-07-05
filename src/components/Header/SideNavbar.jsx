import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { MainContext } from "../../utils/MainContext";

const SideNavbar = () => {
  const { toggleSidebar, showSidebar, showDropdown, toggleDropdown } = useState(MainContext);
  const [isRotated, setIsRotated] = useState(false);
  const [isReversed, setIsReversed] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const toggleRotate = () => {
    if (isRotated) {
      setIsRotated(false);
      setIsReversed(true);
    } else if (isReversed) {
      setIsReversed(false);
      setIsRotated(true);
    } else {
      setIsRotated(true);
    }
  };
  return (
    <nav className="side-navbar">
      <div
        className="category"
        data-aos="fade-right"
        data-aos-offset="400"
        data-aos-easing="easer"
        data-aos-duration="400"
      >
        <div className="category-list" onClick={toggleDropdown}>
          <button
            onClick={toggleRotate}
            className={`${isRotated ? "rotate" : ""} ${
              isReversed ? "reverse" : ""
            }`}
          >
            man
            <span className="toggle-icon"></span>
          </button>
          {showDropdown && (
            <div className="category-map">
              <div className="category-item">All the products</div>
              <div className="category-item">sweatshirts</div>
              <div className="category-item">t-shirt</div>
              <div className="category-item">trousers</div>
              <div className="category-item">outwear</div>
              <div className="category-item">accessories</div>
              <div className="category-item">gift card</div>
            </div>
          )}
          <span className="line"></span>
        </div>
        <div className="category-list" onClick={toggleDropdown}>
          <button
            onClick={toggleRotate}
            className={`${isRotated ? "rotate" : ""} ${
              isReversed ? "reverse" : ""
            }`}
          >
            woman
            <span className="toggle-icon"></span>
          </button>
          {showSidebar && (
            <div className="category-map">
              <div className="category-item">All the products</div>
              <div className="category-item">sweatshirts</div>
              <div className="category-item">t-shirt</div>
              <div className="category-item">tops and dresses</div>
              <div className="category-item">trousers</div>
              <div className="category-item">shorts and skirts</div>
              <div className="category-item">underwear and bikini</div>
              <div className="category-item">outwear</div>
              <div className="category-item">accessories</div>
              <div className="category-item">gift card</div>
            </div>
          )}

          <span className="line"></span>
        </div>
        <div className="category-list">
          <button>who we are</button>
          <span className="line"></span>
        </div>
        <div className="category-list">
          <button>RETURNS AND EXCHANGES</button>
          <span className="line"></span>
        </div>
        <div className="category-list">
          <button>DOWNLOAD APP</button>
          <span className="line"></span>
        </div>
        <div className="category-list">
          <button>REVIEWS</button>
          <span className="line"></span>
        </div>
      </div>
    </nav>
  );
};

export default SideNavbar;
