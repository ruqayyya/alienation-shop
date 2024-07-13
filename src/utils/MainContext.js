import { createContext, useState } from "react";
export const MainContext = createContext();

const GlobalContext = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [closeOverlay, setCloseOverlay] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  // SHOW  SIDEBAR AND CART FUNCTION

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const toggleCart = () => {
    setShowCart(!showCart);
  };
  const toggleOverlay = () => {
    setShowSidebar(false);
    setShowCart(false);
    setCloseOverlay(false);
    console.log("active");
  };

  // SHOW DROPDOWN MENU FUNCTION

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };


  const globalData = {
    toggleSidebar,
    showSidebar,
    toggleDropdown,
    showDropdown,
    handleMouseEnter,
    handleMouseLeave,
    hoveredIndex,
    toggleCart,
    showCart,
    toggleOverlay,
  };
  return (
    <MainContext.Provider value={globalData}>{children}</MainContext.Provider>
  );
};

export default GlobalContext;
