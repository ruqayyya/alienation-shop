import React, { useState } from "react";
import { categories } from "../../db/fakeDb";

const Navbar = () => {
  const [hoveredId, setHoveredId] = useState("");

  return (
    <nav className="navbar">
      <ul className="navlist">
        {categories?.map((item) => (
          <li
            key={item.id}
            className="navitem"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId("")}
          >
            {item.title}
            {hoveredId === item.id && item.subCategories.length > 0 && (
              <ul className="dropdownMenu">
                {item.subCategories.map((subs) => (
                  <li key={subs.id} className="menu">{subs.title}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
