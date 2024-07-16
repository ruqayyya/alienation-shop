import React, { useContext } from "react";
import { buttonlist } from "../../db/buttonDb";
import { MainContext } from "../../utils/MainContext";
import x from "../../assets/images/multiply.png";

const OrderCart = () => {
    const{toggleOrder }=useContext(MainContext)
  return (
    <div className="order-cart">
      <div className="container">
        <div className="top">
          <div className="x-icon row">
            <img src={x} alt="x-icon" onClick={() => toggleOrder()} />
            <div className="title"><h2>order</h2></div>
          </div>
        <span></span>
        </div>
        <div className="button-container">
          <div className="drop-button">
            {buttonlist.map((item) => (
              <button key={item.id}>{item.title}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCart;
