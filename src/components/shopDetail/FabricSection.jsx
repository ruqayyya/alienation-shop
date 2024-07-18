import React from "react";
import fabric from "../../assets/images/cotton-fabric-quality.png";

const FabricSection = () => {
  return (
    <section className="fabric-section">
      <div className="container row">
        <div className="fabric-img">
          <img src={fabric} alt="fabric" />
        </div>
        <div className="fabric-part">
          <div>
            <title>
              <p>COMFORT AND SUPERIOR QUALITY</p>
            </title>
            <p className="text">
              <strong>Built to last</strong> and designed to impress, our{" "}
              <strong>420gsm 100% cotton French terry</strong> sweatshirt is the
              perfect companion for your action-packed days or chilled-out
              nights.
            </p>
            <p className="text">
              It adapts to your pace of life and maintains its cool, wash after
              wash.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FabricSection;
