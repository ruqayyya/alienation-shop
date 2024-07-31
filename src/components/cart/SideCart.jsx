import React, { useContext, useEffect } from "react";
import x from "../../assets/images/multiply.png";
import { MainContext } from "../../utils/MainContext";
import "aos/dist/aos.css";
import AOS from "aos";
import InnerCart from "./InnerCart";
import { NavLink } from "react-router-dom";

const SideCart = () => {
  const { toggleCart,totalPrice } = useContext(MainContext);

  useEffect(() => {
    AOS.init({
      duration: 200,
      easing: "ease-in-out",
      once: true,
    });
  });
  return (
    <div
      className="Side-cart"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="easer"
    >
      <div className="container">
        <div className="top">
          <div
            className="x-icon row"
            data-aos="fade-left"
            data-aos-offset="400"
            data-aos-easing="easer"
            data-aos-duration="400"
          >
            <h2>CART</h2>
            <img src={x} alt="x-icon" onClick={() => toggleCart()} />
            <span></span>
          </div>
        </div>
        <div className="side-cart-part">
          <InnerCart />
        </div>
        <div
          className="buy-part"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="600"
        >
          <span className="liner"></span>
          <div className="bottom-part">
            <p className="order-note">Add order note</p>
            {/* <form>
              <input type="text" placeholder="How can we help you?" />
              <button type="submit">SAVE</button>
            </form> */}
            <p className="edit-order-note">edit order note</p>
            <p>Discounts and shipping costs calculated at checkout</p>
            <NavLink to={'/Shop'}>
              <button className="checkout row">
                CHECKOUT
                <span className="Button-dot"></span>
                <span className="data-price">€{totalPrice}</span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCart;
