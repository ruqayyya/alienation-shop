import React, { useState } from "react";
import { categories } from "../../db/fakeDb";

const Navbar = () => {
  const [showManMenu, setShowManMenu] = useState(false);
  const [showWomanMenu, setShowWomanMenu] = useState(false);
  const [hoveredId, setHoveredId] = useState("");

  const toggleManMenu = () => {
    setShowManMenu(!showManMenu);
    setShowWomanMenu(false);
  };

  const toggleWomanMenu = () => {
    setShowWomanMenu(!showWomanMenu);
    setShowManMenu(false);
  };

  return (
    <nav className="navbar">
      <ul className="navlist">
        {categories?.map((item) => (
          <li
            className="navitem"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId("")}
          >
            {item.title}
            { setHoveredId == item.id && (
              <ul className="dropdownMenu">
                {item.subCategories.map((subs) => (
                  <li className="menu">{subs.title}</li>
                ))}
                {/* <li className="menu">sweatshirts</li>
                <li className="menu">t-shirt</li>
                <li className="menu">trousers</li>
                <li className="menu">outwear</li>
                <li className="menu">accessories</li>
                <li className="menu">gift card</li> */}
              </ul>
            )}
          </li>
        ))}

        {/* <li
          className="navitem"
          onMouseEnter={toggleWomanMenu}
          onMouseLeave={toggleWomanMenu}
        >
          WOMAN
          {showWomanMenu && (
            <ul className="dropdownMenu">
              <li className="menu">All the products
                <span></span>
              </li>
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
        <li className="navitem">WHO WE ARE
        </li>
        <li className="navitem">RETURNS AND EXCHANGES</li>
        <li className="navitem">DOWNLOAD APP</li>
        <li className="navitem">REVIEWS</li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
