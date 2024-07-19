import React, { useState } from "react";
import visa from "../../assets/images/visa.svg";
import visaSirqule from "../../assets/images/visa-sirqule.svg";
import discover from "../../assets/images/discover.svg";
import amex from "../../assets/images/amex.svg";
import paypal from "../../assets/images/paypal (1).png";
import Delivery from "./Delivery";

const PayDetail = () => {
    const [showDelivery, setShowDelivery] = useState(false);

    const handleCheckboxChange = (event) => {
      setShowDelivery(event.target.checked);
    };
  return (
    <div className="payment-form">
      <h2>Pagamenti</h2>
      <p>Tutte le transazioni sono sicure e criptate</p>
      <label className="payment-method">
        <div className="first-dot row">
          <div className="dot">
            <input type="radio" className="radio" name="payment-method" />
          </div>
          <div className="text-part row">
            <div className="text">
              <span>Carta di credito</span>
            </div>
            <div className="icon">
              <div className="icons row">
                <img src={visa} alt="Visa" />
                <img src={visaSirqule} alt="MasterCard" />
                <img src={amex} alt="Amex" />
                <img src={discover} alt="Discover" />
              </div>
            </div>
          </div>
        </div>
      </label>
      <div className="payment">
        <div className="card-details">
          <input type="text" placeholder="Numero carta/ Card number" />
          <div className="expiry-cvv">
            <input type="text" placeholder="Data di scadenza (MM/YY)" />
            <input type="text" placeholder="Codice sicurezza (CVV)" />
          </div>
          <input type="text" placeholder="Nome sulla carta/ Card name" />
          <div className="custom-checkbox">
            <label class="custom-checkbox">
              <input type="checkbox" name="updates"  onChange={handleCheckboxChange} />
              <span>Use shipping address as billing address</span>
            </label>
          </div>
          {!showDelivery && <Delivery />}
        </div>
      </div>
      <label className="method">
        <div className="second-dot row">
          <div className="dot">
            <input
              type="radio"
              className="radio"
              id="paypal"
              name="payment-method"
            />
          </div>
          <div className="text-part row">
            <div className="text">
              <span>paypal</span>
            </div>
            <div className="icon">
              <div className="pay-img">
                <img src={paypal} alt="paypal" />
              </div>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default PayDetail;
