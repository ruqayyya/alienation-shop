import React from "react";

const SideNavbar = () => {
  return (
    <nav className="side-navbar">
      <div className="category">
        <div className="category-list">
          <button>
            man
            <span className='toggle-icon' >+</span>
          </button>
          <div className="category-map">
            <div className="category-item">All the products</div>
            <div className="category-item">sweatshirts</div>
            <div className="category-item">t-shirt</div>
            <div className="category-item">trousers</div>
            <div className="category-item">outwear</div>
            <div className="category-item">accessories</div>
            <div className="category-item">gift card</div>
          </div>
          <span className="line"></span>
        </div>
        <div className="category-list">
          <button>
            woman
            <span className='toggle-icon'>+</span>
          </button>
          <div className="category-map">
            <div className="category-item">All the products</div>
            <div className="category-item">sweatshirts</div>
            <div className="category-item">t-shirt</div>
            <div className="category-item">tops and dresses</div>
            <div className="category-item">trousers</div>
            <div className="category-item">shorts and skirts</div>
            <div className="category-item">underwear and bikini</div>
            <div className="category-item">outwear</div>
            <div className="category-item">accessories</div>
            <div className="category-item">gift card</div>
          </div>
          <span className="line"></span>
        </div>
        <div className="category-list">
          <button>who we are</button>
          <span className="line"></span>
        </div>
        <div className="category-list">
          <button>RETURNS AND EXCHANGES</button>
          <span className="line"></span>
        </div>
        <div className="category-list">
          <button>DOWNLOAD APP</button>
          <span className="line"></span>
        </div>
        <div className="category-list">
          <button>REVIEWS</button>
          <span className="line"></span>
        </div>
      </div>
    </nav>
  );
};

export default SideNavbar;

<ul className="navlist">
  <li className="navitem">
    MAN
    <span></span>
    <span></span>
    <ul className="dropdownMenu">
      <li className="menu">All the products</li>
      <li className="menu">sweatshirts</li>
      <li className="menu">t-shirt</li>
      <li className="menu">trousers</li>
      <li className="menu">outwear</li>
      <li className="menu">accessories</li>
      <li className="menu">gift card</li>
    </ul>
  </li>
  <li className="navitem">
    WOMAN
    <span></span>
    <span></span>
    <ul className="dropdownMenu">
      <li className="menu">All the products</li>
      <li className="menu">sweatshirts</li>
      <li className="menu">t-shirt</li>
      <li className="menu">tops and dresses</li>
      <li className="menu">trousers</li>
      <li className="menu">shorts and skirts</li>
      <li className="menu">underwear and bikini</li>
      <li className="menu">outwear</li>
      <li className="menu">accessories</li>
      <li className="menu">gift card</li>
    </ul>
  </li>
  <li className="navitem">WHO WE ARE</li>
  <li className="navitem">RETURNS AND EXCHANGES</li>
  <li className="navitem">DOWNLOAD APP</li>
  <li className="navitem">REVIEWS</li>
</ul>;
