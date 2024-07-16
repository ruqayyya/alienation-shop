import React, { useContext, useEffect } from "react";
import x from "../../assets/images/multiply.png";
import { MainContext } from "../../utils/MainContext";
import "aos/dist/aos.css";
import AOS from "aos";
import InnerFilter from "./InnerFilter";

const FilterBar = () => {
  const {  toggleFilter } = useContext(MainContext);

  useEffect(() => {
    AOS.init({
      duration: 200,
      easing: "ease-in-out",
      once: true,
    });
  });
  return (
    <div
      className="filter-bar"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="easer"
    >
      <div className="container">
        <div className="top">
          <div
            className="x-icon row"
            data-aos="fade-left"
            data-aos-offset="400"
            data-aos-easing="easer"
            data-aos-duration="400"
          >
            <h2>Filters</h2>
            <img src={x} alt="x-icon" onClick={()=>toggleFilter()} />
            <span></span>
          </div>
        </div>
        <div className="filter-bar-part">
          <InnerFilter/>
        </div>
        <div
          className="apply-part"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="600"
        >
          <span className="liner"></span>
          <div className="bottom-part">
            <button className="apply-button">
              apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
