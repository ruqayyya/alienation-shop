import React from "react";
import hoodie from "../../assets/images/hoodie.webp";

const MeasuresSection = ({title,details}) => {
  return (
    <section className="measures-section">
      <div className="container ">
        <div className="main-title">
          <p>DETAILS AND MEASURES</p>
          <span className="liner"></span>
        </div>
        <div className="bottom-part row">
          <div className="left">
            <div className="product-info">
              <div className="title">
                <p>{title}</p>
              </div>
              <div className="about">
                <p className="first-text">
                  <strong>DESCRIPTION: </strong>
                  {details}
                </p>
                <p className="second-text">
                  “Alienation” logo sewn on the chest.
                </p>
                <p className="third-text">
                  {" "}
                  <strong>Premium Comfort </strong>Carefully crafted using 100%
                  420gsm French terry cotton, this sweatshirt offers an
                  unrivaled experience of comfort. The premium quality fabric
                  ensures softness, warmth and durability that lasts over time,
                  retaining its shape and color wash after wash.{" "}
                </p>
                <div className="product-detail">
                  <ul >
                    <li className="detail-item">100% Cotton</li>
                    <li className="detail-item">
                      Distressed effect with raw cut
                    </li>
                    <li className="detail-item">
                      Alienation® logo print on the front
                    </li>
                    <li className="detail-item">Elastic sleeve bottom</li>
                    <li className="detail-item">Elastic sweatshirt bottom</li>
                  </ul>
                  <p>Sizes and Measurements</p>
                  <ul className="model">
                    <li className="model-item">Fit: Oversize</li>
                    <li className="model-item">
                      The model is 180cm tall and wears a size{" "}
                      <strong>L</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div>
              <img src={hoodie} alt="product-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeasuresSection;
