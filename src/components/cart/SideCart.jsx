import React, { useContext, useEffect } from "react";
import x from "../../assets/images/multiply.png";
import { MainContext } from "../../utils/MainContext";
import "aos/dist/aos.css";
import AOS from "aos";
import InnerCart from "./InnerCart";

const SideCart = () => {
  const { toggleSidebar, showSidebar } = useContext(MainContext);

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
            className="x-icon"
            data-aos="fade-right"
            data-aos-offset="400"
            data-aos-easing="easer"
            data-aos-duration="400"
          >
            <img src={x} alt="x-icon"  />
            <h2>CART</h2>
          </div>
          <div className="side-cart-part">
            <InnerCart/>
          </div>
        </div>
        <div
          className="icon"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="600"
        >
          <span></span>
          <div className="bottom-part">
            <p className="order-note">Add order note</p>
            <p className="order-note">edit order note</p>
            <p>Discounts and shipping costs calculated at checkout</p>
            <button className="checkout">
              CHECKOUT
              <span className="Button-dot"></span>
              <span className="data-price"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCart;
