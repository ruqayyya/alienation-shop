import React from "react";
import CollabrotionCarusel from "./Carusel/CollabrotionCarusel";

const CollabrotionSection = () => {
  return (
    <section className="collaboration-section">
      <div className="container">
        <div className="collaboration">
          <span className="title">SOME COLLABORATIONS</span>
          <div className="collaboration-slider">
            <CollabrotionCarusel/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollabrotionSection;
