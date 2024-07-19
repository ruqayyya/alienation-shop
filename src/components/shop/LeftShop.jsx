import React from "react";
import paypal from "../../assets/images/paypalbuy.svg";
import googlepay from "../../assets/images/light_gpay.svg";

const LeftShop = () => {
  return (
    <div className="left-shop">
      <div className="container">
        <div className="payment-way">
          <p className="title">Express checkout</p>
          <div className="button-container">
            <button className="paypal">
              <img src={paypal} alt="paypal" />
            </button>
            <button className="googlepay">
              <img src={googlepay} alt="googlepay" />
            </button>
          </div>

          <div className="or-way row">
            <span></span>
            <p>or</p>
            <span></span>
          </div>
        </div>
        <div className="contact-part">
          <div className="text-login row">
            <span>contact information</span>
            <span className="login">Log in</span>
          </div>
          <form>
            <input type="text" placeholder="Email" />
            <label class="custom-checkbox">
              <input type="checkbox" name="updates" />
              <span>Update me on offers and news</span>
            </label>
          </form>
        </div>
        <div className="delivery">
          <p>Delivery</p>
          <input type="text" placeholder="Country"/>
          <div className="name-surname row">
            <input type="text" placeholder="Nome/Name" />
            <input type="text" placeholder="Cognome/Surname" />
          </div>
          <input type="text" placeholder="adress" />
          <input type="text" placeholder="Apartment, suite, etc. (optional)" />
          <div className="adress-info row">
            <input type="number" placeholder="Codice postale/Zip Code" />
            <input type="text" placeholder="Citta'/City" />
            <input type="text" placeholder="Provincia" />
          </div>
          <form className="num">
            <input type="text" placeholder="Phone" />
            <label class="custom-checkbox">
              <input type="checkbox" name="updates" />
              <span>Save information for next time</span>
            </label>
          </form>
          <span className="shipping">Shipping method</span>
          <div className="metod">
            Enter your shipping address to view available shipping methods.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftShop;
