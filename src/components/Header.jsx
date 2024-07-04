import React from "react";
import TopHeader from "./Header/TopHeader";
import CentralHeader from "./Header/CentralHeader";
import BottomHeader from "./Header/BottomHeader";

const Header = () => {
  return (
    <header className="header">
      <TopHeader />
      <CentralHeader />
      <BottomHeader />
    </header>
  );
};

export default Header;
