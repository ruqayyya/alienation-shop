import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { MainContext } from "../../utils/MainContext";
import { categories } from "../../db/fakeDb";

const SideNavbar = () => {
  const { toggleSidebar, showSidebar, showDropdown, toggleDropdown } =
    useState(MainContext);
  const [isRotated, setIsRotated] = useState(false);
  const [isReversed, setIsReversed] = useState(false);
  const [selectedCategory, setSelecetedCategory] = useState(null);
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
          {categories.map((item) => (
            <>
              <button
                key={item.id}
                onClick={() => {
                  if (selectedCategory) {
                    setSelecetedCategory(null);
                  } else {
                    setSelecetedCategory(item);
                  }
                }}
                className={`${
                  selectedCategory?.id === item.id ? "rotate" : "reverse"
                }`}
              >
                {item.title}
                {item.subCategories.length !== 0 && (
                  <span className="toggle-icon"></span>
                )}
              </button>
              <div className="category-map">
                {selectedCategory &&
                  selectedCategory?.id === item.id &&
                  selectedCategory?.subCategories?.map((subs) => (
                    <div className="category-item">{subs.title}</div>
                  ))}
              </div>
              <span className="line"></span>
            </>
          ))}
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
