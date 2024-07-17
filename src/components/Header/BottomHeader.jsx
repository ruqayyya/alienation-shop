import React from "react";
import { NavLink } from "react-router-dom";

const BottomHeader = () => {
  return (
    <header className="bottom-header">
      <div className="container">
        <NavLink to={"/categories"}>
          <button className="gender man">man</button>
        </NavLink>
        <NavLink to={"/categories"}>
          <button className="gender woman">woman</button>
        </NavLink>
      </div>
    </header>
  );
};

export default BottomHeader;
