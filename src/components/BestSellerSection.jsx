import React from "react";
import BestSellerCarusel from "./Carusel/BestsellerCarusel";

const BestSection = () => {
  return (
    <section className="best-section">
      <div className="container">
        <div className="best">
          <span className="title">best seller</span>
          <div className="best-slider">
            <BestSellerCarusel />
          </div>
          <button className="bestButton">view all products</button>
        </div>
      </div>
    </section>
  );
};

export default BestSection;
