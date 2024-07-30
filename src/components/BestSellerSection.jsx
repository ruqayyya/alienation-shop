import React, { useContext } from "react";
import BestSellerCarusel from "./Carusel/BestsellerCarusel";
import { NavLink } from "react-router-dom";
import { MainContext } from "../utils/MainContext";

const BestSection = () => {
  return (
    <section className="best-section">
      <div className="container">
        <div className="best">
          <span className="title">bestseller</span>
          <div className="best-slider">
            <BestSellerCarusel  />
          </div>
          <NavLink to={'/categories'}>
          <button className="bestButton">view all products</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default BestSection;
