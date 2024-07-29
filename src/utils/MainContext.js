import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const MainContext = createContext();

const GlobalContext = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [closeOverlay, setCloseOverlay] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [currentPage, setCurrentPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [isFirstWhite, setIsFirstWhite] = useState(false);
  const [isSecondWhite, setIsSecondWhite] = useState(false);
  const [dual, setDual] = useState(false);
  const [triple, setTriple] = useState(false);
  const [single, setSingle] = useState(false);
  const [countries, setCountries] = useState([]);
  const [products, setProducts] = useState([]);


  // CHANGE GRID TEMA
  const toggleFirstImage = () => {
    setIsFirstWhite(true);
    setIsSecondWhite(false);
  };

  const toggleSecondImage = () => {
    setIsSecondWhite(true);
    setIsFirstWhite(false);
  };
  const handleSingle = () => {
    setSingle(true);
    setDual(false);
    setTriple(false);
    toggleSecondImage();
  };
  const handleDual = () => {
    setDual(true);
    setTriple(false);
    setSingle(false);
    toggleFirstImage();
  };
  const handleTriple = () => {
    setTriple(true);
    setSingle(false);
    setDual(false);
    toggleSecondImage();
  };

  // SHOW  SIDEBAR, CART, FILTER, ORDER FUNCTION
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
    setShowOrder(false);
    setShowFilter(false);
    setCloseOverlay(false);
  };
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };
  const toggleOrder = () => {
    setShowOrder(!showOrder);
  };

  // SHOW DROPDOWN MENU FUNCTION
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };



  const getProduct = async () => {
    try {
      const res = await axios
        .get(process.env.REACT_APP_ALL_PRODUCTS)
        .then((res) => res.data);
      setProducts(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, [setProducts]);


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
    toggleFilter,
    showFilter,
    toggleOrder,
    showOrder,
    toggleFirstImage,
    toggleSecondImage,
    isSecondWhite,
    isFirstWhite,
    handleSingle,
    handleTriple,
    dual,
    triple,
    single,
    handleDual,
    products
  };
  return (
    <MainContext.Provider value={globalData}>{children}</MainContext.Provider>
  );
};

export default GlobalContext;
