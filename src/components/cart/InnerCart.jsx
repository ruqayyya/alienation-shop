import React from "react";
import random from "../../assets/images/glow_tee_dark_800x.webp";
import minus from "../../assets/images/minus-sign.png";
import plus from "../../assets/images/plus.png";

const InnerCart = () => {
  return (
    <div className="inner-cart">
      <div className="container">
        <div className="shop-info">
          <div className="clothes row">
            <div className="clothes-img">
              <img src={random} alt="" />
            </div>
            <div className="clothes-info">
              <span className="name">bonner</span>
              <span className="size"> m</span>
              <span className="between">
                ESTIMATED BETWEEN: JUL 14 AND JUL 17
              </span>
              <span className="offer-identity"></span>
              <span className="price">€76 </span>
            </div>
          </div>
          <div className="clothes row">
            <div className="clothes-img">
              <img src={random} alt="" />
            </div>
            <div className="clothes-info">
              <span className="name">bonner</span>
              <span className="size"> m</span>
              <span className="between">
                ESTIMATED BETWEEN: JUL 14 AND JUL 17
              </span>
              <span className="offer-identity"></span>
              <span className="price">€76</span>
              <div className="add row">
                <div className="quantity-box row">
                    <img src={minus} alt="" className="decrease" />
                    <span className="num">2</span>
                    <img src={plus} alt="" className="increase" />
                </div>
                <div className="remove">
                    <span className="remove-cart">remove</span>
                    <span className="line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerCart;
