import { createContext, useState } from "react";
export const MainContext = createContext();

const GlobalContext = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [closeOverlay, setCloseOverlay] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const[showFilter, setShowFilter]=useState(false)


  // SHOW  SIDEBAR, CART, FILTER FUNCTION
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
  const toggleFilter=()=>{
    setShowFilter(!showFilter)
    console.log('active');
  }

  // SHOW DROPDOWN MENU FUNCTION
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // PAGINATION
  const ITEMS_PER_PAGE = 20;
  const totalItems = 70;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
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
    nextPage,
    prevPage,
    handlePageChange, currentPage,totalPages,endIndex,startIndex, totalItems,toggleFilter, showFilter
  };
  return (
    <MainContext.Provider value={globalData}>{children}</MainContext.Provider>
  );
};

export default GlobalContext;
