import React, { useContext } from "react";
import Hoodie from "../../assets/images/kynek.webp";
import plus from "../../assets/images/plus.png";
import minus from "../../assets/images/minus-sign.png";
import { Link, NavLink } from "react-router-dom";
import { MainContext } from "../../utils/MainContext";

const CartSection = () => {
  const { cartList,totalPrice,totalSinglePrice,increaseQuantity,decreaseQuantity,removeProductlist } = useContext(MainContext);

  return (
    <section className="cart-section">
      <div className="container">
        {cartList.length === 0 ? (
          <div className="empty">
            <p>Cart Is Empty</p>
          </div>
        ) : (
          <>
            <h1>CART</h1>
            <div className="cart-header row">
              <div className="cart-header-item articles">ARTICLES</div>
              <div className="cart-header-item amount">AMOUNT</div>
              <div className="cart-header-item total">TOTAL</div>
            </div>
            <span className="header-liner top"></span>
            {cartList.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info row">
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}/${item.productImage}`}
                    alt={item.name}
                  />
                  <div className="item-details row">
                    <div className="item">
                      <p>{item.name}</p>
                      <p className="italic">S</p>
                      <p className="italic">
                        ESTIMATED BETWEEN: JUL 14 AND JUL 17
                      </p>
                      <p className="italic">€{item.price}</p>
                    </div>
                    <div className="cart-item-amount">
                      <div className="amount-container ">
                        <div className="quantity">
                          <img src={minus} alt="minus" onClick={() => decreaseQuantity(item.id)} />
                          <span>{item.quantity}</span>
                          <img src={plus} alt="plus" onClick={()=>increaseQuantity(item.id)} />
                        </div>
                        <span className="remove" onClick={()=>removeProductlist(item.id)}>REMOVE</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart-item-total">€{totalSinglePrice[item.id]}</div>
              </div>
            ))}
            <span className="header-liner"></span>
            <div className="check-part">
              <div className="check-container row">
                <form>
                  <p>Add order note</p>
                  <input type="text" placeholder="How can help you?" />
                </form>
                <div className="total-container ">
                  <span> total: €{totalPrice}</span>
                  <p>Discounts and shipping costs calculated at checkout</p>
                  <Link to={"/Shop"}>
                    <button>checkout</button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CartSection;
