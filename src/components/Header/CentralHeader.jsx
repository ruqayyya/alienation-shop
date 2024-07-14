import React, { useContext } from "react";
import logo from "../../assets/images/image.png";
import search from "../../assets/images/search-interface-symbol.png";
import user from "../../assets/images/user.png";
import bag from "../../assets/images/bag.png";
import menu from "../../assets/images/menu.png";
import Navbar from "./Navbar";
import { MainContext } from "../../utils/MainContext";
import { 
   NavLink } from "react-router-dom";

const CentralHeader = () => {
  const { toggleSidebar, toggleCart } = useContext(MainContext);
  return (
    <header className="central-header">
      <div className="container row">
        <div className="burger">
          <img className="menu" src={menu} alt="menu" onClick={toggleSidebar} />
        </div>
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <Navbar />
        <div className="image">
          <div className="icon">
            <img className="user" src={user} alt="user" />
          </div>
          <div className="icon">
            <img src={search} alt="search" />
          </div>
          <div className="icon">
            <img
              className="bag"
              src={bag}
              alt="bag"
              onClick={() => toggleCart()}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default CentralHeader;
