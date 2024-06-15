import React from "react";
import logo from "../../assets/images/image.png";
import search from '../../assets/images/search-interface-symbol.png';
import user from '../../assets/images/user.png';
import bag from '../../assets/images/bag.png';

const CentralHeader = () => {
  return (
    <div className="central-header">
      <div className="container row">
        {/* <div className="burger">
          <FontAwesomeIcon icon={faBars} />
        </div> */}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="navbar">
          <ul className="navlist">
            <li className="navitem">MAN</li>
            <li className="navitem">WOMAN</li>
            <li className="navitem">WHO WE ARE</li>
            <li className="navitem">RETURNS AND EXCHANGES</li>
            <li className="navitem">DOWNLOAD APP</li>
            <li className="navitem">REVIEWS</li>
          </ul>
        </nav>
        <div className="image">
          <img src={user} alt="user" />
          <img src={search} alt="search" />
          <img className="bag" src={bag} alt="bag" />
        </div>
      </div>
    </div>
  );
};

export default CentralHeader;
