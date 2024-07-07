import React from "react";
import blow from "../assets/images/blovjob.webp";

const BlowJobSection = () => {
  return (
    <section className="blow-section">
      <div className="container">
        <div className="blow-img">
          <img src={blow} alt="blovsection" />
        </div>
        <div className="bottom-part">
          <div className="title">BLOWJOB TEE</div>
          <button>find out now</button>
        </div>
      </div>
    </section>
  );
};

export default BlowJobSection;
