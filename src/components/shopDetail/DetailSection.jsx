import React, { Fragment, useState } from "react";
import fire from "../../assets/images/fire_20x.webp";
import lock from "../../assets/images/lock.png";
import car from "../../assets/images/car.webp";
import infoIcon from "../../assets/images/info-button-gray_28x.webp";
import pay from "../../assets/images/secure-payment-icon-product_28x.webp";
import product from "../../assets/images/simple_return_icon_product_page_28x.webp";
import paypal from "../../assets/images/paypal.png";
import applepay from "../../assets/images/apple.png";
import googelpay from "../../assets/images/google-pay.png";
import starLogo from "../../assets/images/trustpilot_logo.webp";
import star from "../../assets/images/trustpilot_stars.png";
import black from "../../assets/images/kynek.webp";
import { detail } from "../../db/detailDb";

const DetailSection = () => {
  const [selectedCategory, setSelecetedCategory] = useState(null);

  return (
    <section className="detail-section">
      <div className="container">
        <div className="detail-part ">
          <div className="clothes row">
            <div className="img-details">
              <div className="hero-image">
                <img src={black} alt="detail-hero-img" />
              </div>
              <div className="images row">
                <img src={black} alt="detail-img" />
                <img src={black} alt="detail-img" />
                <img src={black} alt="detail-img" />
                <img src={black} alt="detail-img" />
              </div>
            </div>
            <div className="clothes-detail">
              <div className="detail-container">
                <div className="name">THUNDER CREWNECK</div>
                <div className="price">€85</div>
                <select name="size" id="size">
                  <option value="s">s</option>
                  <option value="m">m</option>
                  <option value="l">l</option>
                  <option value="xl">xl</option>
                </select>
                <div className="fire-part ">
                  <div className="fire-info row">
                    <img src={fire} alt="fire-icon" />
                    <span>Only 1 pieces left available</span>
                  </div>
                </div>
                <button className="cart-button">add to cart</button>
                <div className="secure ">
                  <div className="secure-info row">
                    {" "}
                    <img src={lock} alt="lock-icon" />
                    <span>Secure transaction</span>
                  </div>
                </div>
                <div className="pay row">
                  <img className="apple" src={applepay} alt="apple" />
                  <div>
                    <img src={googelpay} alt="google" />
                  </div>
                  <img src={paypal} alt="paypal" />
                </div>
                <div className="info-box-container">
                  <div className="info-part">
                    <div className="info-item">
                      <div className="icon-text">
                        <img src={car} alt="car-icon" className="icon" />
                        <div>
                          <p className="title">Estimated delivery</p>
                          <p>
                            <strong>Italy:</strong> 2-3 working days
                          </p>
                          <p>
                            <strong>Europe:</strong> 3-5 working days
                          </p>
                        </div>
                      </div>
                      <img
                        src={infoIcon}
                        alt="info-icon"
                        className="info-icon"
                      />
                    </div>
                    <span className="liner"></span>
                    <div className="info-item">
                      <div className="icon-text">
                        <img
                          src={product}
                          alt="product-icon"
                          className="icon"
                        />
                        <div>
                          <p className="title">Easy returns</p>
                        </div>
                      </div>
                      <img
                        src={infoIcon}
                        alt="info-icon"
                        className="info-icon"
                      />
                    </div>
                    <span className="liner"></span>
                    <div className="info-item">
                      <div className="icon-text">
                        <img
                          src={pay}
                          alt="pay-product-icon"
                          className="icon"
                        />
                        <div>
                          <p className="title">Secure payments</p>
                        </div>
                      </div>
                      <img
                        src={infoIcon}
                        alt="info-icon"
                        className="info-icon"
                      />
                    </div>
                  </div>
                </div>
                <div className="product-detail onClick={toggleDropdown}">
                  {detail.map((item) => (
                    <Fragment key={item.id}>
                      <button
                        onClick={() => {
                          if (selectedCategory) {
                            setSelecetedCategory(null);
                          } else {
                            setSelecetedCategory(item);
                          }
                        }}
                        className={`${
                          selectedCategory?.id === item.id
                            ? "rotate"
                            : "reverse"
                        }`}
                      >
                        {item.title}
                        {item.subdetails.length !== 0 && (
                          <span className="toggle-icon"></span>
                        )}
                      </button>
                      <ul >
                        {selectedCategory &&
                          selectedCategory?.id === item.id &&
                          selectedCategory?.subdetails?.map((subs) => (
                            <li key={subs.id}>
                              {subs.title}
                            </li>
                          ))}
                      </ul>
                      <span className="line"></span>
                    </Fragment>
                  ))}
                </div>
                <div className="star-info">
                  <div className="star-logo">
                    <img src={starLogo} alt="star-logo" />
                  </div>
                  <div className="star">
                    <img src={star} alt="star" />
                    <span>4.4 • Excellent</span>
                  </div>
                  <button className="reviews">read all reviews</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
