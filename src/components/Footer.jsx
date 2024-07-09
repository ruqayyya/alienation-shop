import React from "react";
import insta from "../assets/images/instagram.png";
import paypal from "../assets/images/paypal.png";
import applepay from "../assets/images/apple.png";
import googelpay from "../assets/images/google-pay.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <select className="unit" name="euro">
        <option value="euro">EUR €</option>
        </select>
        <div className="inner-footer">
          <div className="letter-info">
            <h5>NEWSLETTER</h5>
            <p>
              Drop and restock dates are always communicated in advance by
              email. By signing up, you can also access exclusive discounts and
              promotions.
            </p>
            <form>
              <input type="text" placeholder="insert your email" />
              <button className="subscrabe">SUBSCRIBE</button>
            </form>
          </div>
          <div className="links">
            <h5>quick links</h5>
            <ul className="link">
              <li className="link-item">Customer Service</li>
              <li className="link-item">Start the return or product exchange process</li>
              <li className="link-item">Near</li>
              <li className="link-item">Download App Alienation</li>
              <li className="link-item">Account</li>
              <li className="link-item">Terms and conditions</li>
              <li className="link-item">Returns and exchanges conditions</li>
              <li className="link-item">Privacy Policy</li>
            </ul>
          </div>
          <div className="contact">
            <h5>contact</h5>
            <div className="contact-info">
              {" "}
              <span>Alienation LTD </span>
              <span>VAT: CY10427717Q</span>
              <span>Email: support@alienation.shop</span>
              <span>WhatsApp: +44 07782495646</span>
            </div>
            <div className="insta">
              <img src={insta} alt="footer-insta" />
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <span>© ALIENATION</span>
          <div className="pay">
            <img src={applepay} alt="apple" />
            <div>
              <img src={googelpay} alt="google" />
            </div>
            <img src={paypal} alt="paypal" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
