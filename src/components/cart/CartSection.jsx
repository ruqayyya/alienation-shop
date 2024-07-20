import React from "react";
import Hoodie from "../../assets/images/kynek.webp";
import plus from "../../assets/images/plus.png";
import minus from "../../assets/images/minus-sign.png";
import { Link, NavLink } from "react-router-dom";
const CartSection = () => {
  return (
    <section className="cart-section">
      <div className="container">
        <h1>CART</h1>
        <div className="cart-header row">
          <div className="cart-header-item articles">ARTICLES</div>
          <div className="cart-header-item amount">AMOUNT'</div>
          <div className="cart-header-item total">TOTAL</div>
        </div>
        <span className="header-liner top"></span>
        <div className="cart-item">
          <div className="cart-item-info row">
            <img src={Hoodie} alt="Holo Alien Hoodie" />
            <div className="item-details row">
              <div className="item">
                <p>HOLO ALIEN HOODIE</p>
                <p className="italic">S</p>
                <p className="italic">ESTIMATED BETWEEN: JUL 14 AND JUL 17</p>
                <p className="italic">€85</p>
              </div>
              <div className="cart-item-amount">
                <div className="amount-container ">
                  <div className="quantity">
                    {" "}
                    <img src={minus} alt="minus" />
                    <span>2</span>
                    <img src={plus} alt="plus" />
                  </div>
                  <span className="remove">REMOVE</span>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-item-total">€170</div>
        </div>
        <div className="cart-item">
          <div className="cart-item-info row">
            <img src={Hoodie} alt="Holo Alien Hoodie" />
            <div className="item-details row">
              <div className="item">
                <p>HOLO ALIEN HOODIE</p>
                <p className="italic">S</p>
                <p className="italic">ESTIMATED BETWEEN: JUL 14 AND JUL 17</p>
                <p className="italic">€85</p>
              </div>
              <div className="cart-item-amount">
                <div className="amount-container ">
                  <div className="quantity">
                    {" "}
                    <img src={minus} alt="minus" />
                    <span>2</span>
                    <img src={plus} alt="plus" />
                  </div>
                  <span className="remove">REMOVE</span>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-item-total">€170</div>
        </div>
        <div className="cart-item">
          <div className="cart-item-info row">
            <img src={Hoodie} alt="Holo Alien Hoodie" />
            <div className="item-details row">
              <div className="item">
                <p>HOLO ALIEN HOODIE</p>
                <p className="italic">S</p>
                <p className="italic">ESTIMATED BETWEEN: JUL 14 AND JUL 17</p>
                <p className="italic">€85</p>
              </div>
              <div className="cart-item-amount">
                <div className="amount-container ">
                  <div className="quantity">
                    {" "}
                    <img src={minus} alt="minus" />
                    <span>2</span>
                    <img src={plus} alt="plus" />
                  </div>
                  <span className="remove">REMOVE</span>
                </div>
              </div>
            </div>
          </div>
          <div classname="cart-item-total">€170</div>
        </div>
        <span className="header-liner"></span>
        <div className="check-part">
          <div className="check-container row">
            <form>
              <p>Add order note</p>
              <input type="text" placeholder="How can help you?" />
            </form>
            <div className="total-container ">
              <span> total: €1,109</span>
              <p>Discounts and shipping costs calculated at checkout</p>
              <Link to={'/Shop'}>
                <button>checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
