import React from "react";
import girlHoodie from "../../assets/images/girl-hoodie.jpg";

const AsymmetrikSection = () => {
  return (
    <section className="asymmetric-section">
      <div className="container row">
        <div className="girl-img">
          <img src={girlHoodie} alt="girl-hoodie" />
        </div>
        <div className="asymmetric-part">
          <div>
            <title>
              <p>ASYMMETRIC STYLE AND COLORS</p>
            </title>
            <p className="text">
              Asymmetrical layers in grey and vibrant fuchsia intertwine in a
              play of contrasts .{" "}
            </p>
            <p className="text">
              Each insert is a brush stroke in an avant-garde painting, each
              line a path towards the future of fashion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AsymmetrikSection;
