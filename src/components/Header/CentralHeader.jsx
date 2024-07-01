import React, { useState } from "react";
import logo from "../../assets/images/image.png";
import search from "../../assets/images/search-interface-symbol.png";
import user from "../../assets/images/user.png";
import bag from "../../assets/images/bag.png";
import menu from "../../assets/images/menu.png";

const CentralHeader = () => {
  const [showManMenu, setShowManMenu] = useState(false);
  const [showWomanMenu, setShowWomanMenu] = useState(false);

  const toggleManMenu = () => {
    setShowManMenu(!showManMenu);
    setShowWomanMenu(false); 
  };

  const toggleWomanMenu = () => {
    setShowWomanMenu(!showWomanMenu);
    setShowManMenu(false);
  };

  return (
    <div className="central-header">
      <div className="container row">
        <div className="burger">
          <img className="menu" src={menu} alt="menu" />
        </div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="navbar">
          <ul className="navlist">
            <li className="navitem" onMouseEnter={toggleManMenu} onMouseLeave={toggleManMenu}>
              MAN
              {showManMenu && (
                <ul className="dropdownMenu">
                  <li className="menu">All the products</li>
                  <li className="menu">sweatshirts</li>
                  <li className="menu">t-shirt</li>
                  <li className="menu">trousers</li>
                  <li className="menu">outwear</li>
                  <li className="menu">accessories</li>
                  <li className="menu">gift card</li>
                </ul>
              )}
            </li>
            <li className="navitem" onMouseEnter={toggleWomanMenu} onMouseLeave={toggleWomanMenu}>
              WOMAN
              {showWomanMenu && (
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
              )}
            </li>
            <li className="navitem">WHO WE ARE</li>
            <li className="navitem">RETURNS AND EXCHANGES</li>
            <li className="navitem">DOWNLOAD APP</li>
            <li className="navitem">REVIEWS</li>
          </ul>
        </nav>
        <div className="image">
          <div className="icon">
            <img src={user} alt="user" />
          </div>
          <div className="icon">
            <img src={search} alt="search" />
          </div>
          <div className="icon">
            <img className="bag" src={bag} alt="bag" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentralHeader;
