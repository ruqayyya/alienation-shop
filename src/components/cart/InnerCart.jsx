import React, { useContext } from "react";
import random from "../../assets/images/glow_tee_dark_800x.webp";
import minus from "../../assets/images/minus-sign.png";
import plus from "../../assets/images/plus.png";
import { MainContext } from "../../utils/MainContext";

const InnerCart = () => {
  const { cartList,increaseQuantity,decreaseQuantity,removeProductlist } = useContext(MainContext);
  return (
    <div
      className="inner-cart"
      data-aos="fade-left"
      data-aos-offset="400"
      data-aos-easing="easer"
      data-aos-duration="400"
    >
      <div className="container">
        <div className="shop-info">
        {cartList.length===0 &&
          <div className="empty">
           <p>Cart is Empty</p> 
          </div>}
          {cartList.map((item) => (
            <div key={item.id} className="clothes row">
              <div className="clothes-img">
                <img
                  src={`${process.env.REACT_APP_BASE_URL}/${item.productImage}`}
                  alt={item.name}
                />
              </div>
              <div className="clothes-info">
                <span className="name">{item.name}</span>
                <span className="size"> m</span>
                <span className="between">
                  ESTIMATED BETWEEN: JUL 14 AND JUL 17
                </span>
                <span className="offer-identity"></span>
                <span className="price">€{item.price} </span>
                <div className="add row">
                  <div className="quantity-box row">
                    <img src={minus} alt="minus" className="decrease" onClick={() => decreaseQuantity(item.id)} />
                    <span className="num">{item.quantity}</span>
                    <img src={plus} alt="plus" className="increase" onClick={() => increaseQuantity(item.id)}/>
                  </div>
                  <div className="remove">
                    <span className="remove-cart" onClick={() => removeProductlist(item.id)}>remove</span>
                    <span className="line"></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InnerCart;
