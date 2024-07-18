import React from "react";
import Hoodie from "../../assets/images/kynek.webp";
import plus from "../../assets/images/plus.png";
import minus from "../../assets/images/minus-sign.png";
const CartSection = () => {
  return (
    <section className="cart-section">
      <div className="container">
        <h1>CART</h1>
        <div class="cart-header row">
          <div class="cart-header-item articles">ARTICLES</div>
          <div class="cart-header-item amount">AMOUNT'</div>
          <div class="cart-header-item total">TOTAL</div>
        </div>
        <span className="header-liner"></span>
        <div class="cart-item">
          <div class="cart-item-info row">
            <img src={Hoodie} alt="Holo Alien Hoodie" />
            <div class="item-details">
              <p>HOLO ALIEN HOODIE</p>
              <p className="italic">S</p>
              <p className="italic">ESTIMATED BETWEEN: JUL 14 AND JUL 17</p>
              <p className="italic">€85</p>
            </div>
          </div>
          <div class="cart-item-amount">
            <div className="amount-container">
              <div className="quantity">
                {" "}
                <img src={minus} alt="minus" />
                <span>2</span>
                <img src={plus} alt="plus" />
              </div>
              <span className="remove">REMOVE</span>
            </div>
          </div>
          <div class="cart-item-total">€170</div>
        </div>
        <div class="cart-item">
          <div class="cart-item-info row">
            <img src={Hoodie} alt="Holo Alien Hoodie" />
            <div class="item-details">
              <p>HOLO ALIEN HOODIE</p>
              <p className="italic">S</p>
              <p className="italic">ESTIMATED BETWEEN: JUL 14 AND JUL 17</p>
              <p className="italic">€85</p>
            </div>
          </div>
          <div class="cart-item-amount">
            <div className="amount-container">
              <div className="quantity">
                {" "}
                <img src={minus} alt="minus" />
                <span>2</span>
                <img src={plus} alt="plus" />
              </div>
              <span className="remove">REMOVE</span>
            </div>
          </div>
          <div class="cart-item-total">€170</div>
        </div>
        <div class="cart-item">
          <div class="cart-item-info row">
            <img src={Hoodie} alt="Holo Alien Hoodie" />
            <div class="item-details">
              <p>HOLO ALIEN HOODIE</p>
              <p className="italic">S</p>
              <p className="italic">ESTIMATED BETWEEN: JUL 14 AND JUL 17</p>
              <p className="italic">€85</p>
            </div>
          </div>
          <div class="cart-item-amount">
            <div className="amount-container">
              <div className="quantity">
                {" "}
                <img src={minus} alt="minus" />
                <span>2</span>
                <img src={plus} alt="plus" />
              </div>
              <span className="remove">REMOVE</span>
            </div>
          </div>
          <div class="cart-item-total">€170</div>
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
              <button>checkout</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
