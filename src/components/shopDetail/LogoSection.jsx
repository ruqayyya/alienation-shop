import React from "react";
import boyHoodie from "../../assets/images/boy-hoodie.png";
import secondgirlHoodies from "../../assets/images/second-girl-hoodie.jpg";

const LogoSection = () => {
  return (
    <section className="logo-section">
      <div className="container row">
        <div className="logo-part">
          <div>
            <p className="text">
              The "Alienation" logo is not simply sewn onto your chest; it is a
              seal of originality. It is the signature that distinguishes you,
              the symbol of a community that dares to challenge the ordinary.
            </p>
          </div>
        </div>
        <div className="boy-img">
          <img className="boy-hoodie" src={boyHoodie} alt="boy-hoodie" />
          <img  className="girl-hoodie" src={secondgirlHoodies} alt="girl-hoodie" />
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
