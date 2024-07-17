import React from "react";

import black from "../assets/images/glow_tee_dark_800x.webp";
import CollectionCarusel from "./Carusel/CollectionCarusel";
import { NavLink } from "react-router-dom";

const CollectionSection = () => {
  return (
    <section className="collection-section">
      <div className="container">
        <div className="collection">
          <span className="title">GLOW COLLECTION</span>
          <div className="collection-slider">
            <CollectionCarusel />
          </div>
          <NavLink to={"/categories"}>
            <button className="collectionButton">see all</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
