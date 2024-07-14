import React, { useState } from "react";
import { categories } from "../../db/fakeDb";
import { NavLink } from "react-router-dom";

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
            {item.id === 1 || item.id === 2 ? (
              <NavLink className="categorylink" to={`/categories`}>
                {item.title}
              </NavLink>
            ) : (
              item.title
            )}
            {hoveredId === item.id && item.subCategories.length > 0 && (
              <ul className="dropdownMenu">
                {item.subCategories.map((subs) => (
                  <NavLink
                    className="categorylink"
                    to={`/categories/${item.id}/${subs.id}`}
                  >
                    <li key={subs.id} className="menu">
                      {subs.title}
                    </li>
                  </NavLink>
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
