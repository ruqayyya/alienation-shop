import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { MainContext } from "../../utils/MainContext";
import { categories } from "../../db/fakeDb";

const SideNavbar = () => {
  const {  toggleDropdown } =
    useState(MainContext);
  const [selectedCategory, setSelecetedCategory] = useState(null);
  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

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
          <p className="title">account</p>
        </div>
      </div>
    </nav>
  );
};

export default SideNavbar;
