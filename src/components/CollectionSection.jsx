import React from "react";
import black from '../assets/images/glow_tee_dark_800x.webp'


const CollectionSection = () => {
    
  return (
    <section className="collection-section">
      <div className="container">
        <div className="collection">
          <span className="title">GLOW COLLECTION</span>
          <div className="collection-slider">
            <img src={black} alt="black" />
            <img src={black} alt="black" />
            <img src={black} alt="black" />
            <img src={black} alt="black" />
            <img src={black} alt="black" />
            <img src={black} alt="black" />
          </div>
          <button>see all</button>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
