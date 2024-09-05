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
  const [showFilter, setShowFilter] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [isFirstWhite, setIsFirstWhite] = useState(false);
  const [isSecondWhite, setIsSecondWhite] = useState(false);
  const [dual, setDual] = useState(false);
  const [triple, setTriple] = useState(false);
  const [single, setSingle] = useState(false);
  const [countries, setCountries] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalSinglePrice, setTotalSinglePrice] = useState(0);
  const [updatedQuantity, setUpdatedQuantity] = useState(0);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [surnameError, setSurnameError] = useState(false);
  const [adressError, setAdressError] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  //LOCALSTORAGE
  useEffect(() => {
    const storedCart = localStorage.getItem("cartList");
    if (storedCart) {
      setCartList(JSON.parse(storedCart)); // LocalStorage-də saxlanılan məlumatları JSON formatında parse edirik
    }
  }, []);

  useEffect(() => {
    if (cartList.length > 0) {
      localStorage.setItem("cartList", JSON.stringify(cartList));
    }
  }, [cartList]);

  // CHECKED INPUT FUNCTION
  const validateInputs = () => {
    let isValid = true;

    if (name.trim() === "" ) {
      setNameError(true); 
      isValid = false;
    } else {
      setNameError(false); 
    }
  
    if (surname.trim() === "") {
      setSurnameError(true);
      isValid = false;
    } else {
      setSurnameError(false);
    }
  
    if (address.trim() === "") {
      setAdressError(true); 
      isValid = false;
    } else {
      setAdressError(false); 
    }
    if (phoneNumber.trim() === "") {
      setPhoneError(true); 
      isValid = false;
    } else {
      setPhoneError(false); 
    }
  
    return isValid;
  };
  const checkedInputEmpty = (e) => {
    e.preventDefault();
    if (validateInputs()) {
     
      window.location.href = "/";
      alert("Sifarişiniz qəbul edildi");
    }

  };

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

  // SHOW SIDEBAR, CART, FILTER, ORDER FUNCTION
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

  // DATA
  const getProduct = async () => {
    try {
      const res = await axios.get(process.env.REACT_APP_ALL);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  // CART TOTAL
  const calcCartCount = () => {
    const total = cartList.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    setTotalPrice(total);
  };

  const calcMultiPrice = () => {
    const multiPrices = cartList.reduce((acc, item) => {
      acc[item.id] = item.quantity * item.price;
      return acc;
    }, {});
    setTotalSinglePrice(multiPrices);
  };

  const increaseQuantity = (id) => {
    const updatedCart = cartList.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartList(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartList.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartList(updatedCart);
  };

  const removeProductlist = (id) => {
    const updatedCart = cartList.filter((item) => item.id !== id);
    setCartList(updatedCart);
  };

  useEffect(() => {
    calcCartCount();
    calcMultiPrice();
  }, [cartList]);

  // HANDLE SORTING
  const handleSort = (id) => {
    let sortedProducts;
    switch (id) {
      case 1:
        sortedProducts = [...products]; 
        break;
      case 2:
        sortedProducts = [...products]; 
        break;
      case 3:
        sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 4:
        sortedProducts = [...products].sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 5:
        sortedProducts = [...products].sort((a, b) => a.price - b.price);
        break;
      case 6:
        sortedProducts = [...products].sort((a, b) => b.price - a.price);
        break;
      case 7:
        sortedProducts = [...products].sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 8:
        sortedProducts = [...products].sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      default:
        sortedProducts = [...products];
    }
    setSortedProducts(sortedProducts);
    toggleDropbutton();
  };
  const toggleDropbutton = () => {
    setIsDropdownOpen(!isDropdownOpen); 
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
    products,
    setCartList,
    cartList,
    calcMultiPrice,
    calcCartCount,
    totalPrice,
    totalSinglePrice,
    updatedQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeProductlist,
    setSortedProducts,
    sortedProducts,
    handleSort,
    toggleDropbutton,setNameError,setSurnameError,phoneError,setPhoneNumber, setAdressError,checkedInputEmpty, nameError, surnameError, adressError,setAddress, setName, setSurname
  };

  return (
    <MainContext.Provider value={globalData}>{children}</MainContext.Provider>
  );
};

export default GlobalContext;
