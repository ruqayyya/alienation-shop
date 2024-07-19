import React from "react";
import { NavLink } from "react-router-dom";

const ShopHeader = () => {
  return (
    <header className="shop-header">
      <div className="container">
        <div className="logo-name">
          <NavLink to={'/'}><p>Alienation</p></NavLink>
        </div>
      </div>
    </header>
  );
};

export default ShopHeader;
