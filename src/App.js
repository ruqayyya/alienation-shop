import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";
import Home from "./pages/Home";
import GlobalContext from "./utils/MainContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import ShopDetail from "./pages/ShopDetail";
import Categories from "./pages/Categories";
import Shop from "./pages/Shop";
import LoginPage from "./pages/LoginPage";
import SignPage from "./pages/SignPage";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 100,
      easing: "linear",
      once: true,
    });

    const handleScroll = () => {
      if (window.scrollY > 5000) {
        AOS.init({ disable: true });
      } else {
        AOS.init({
          duration: 100,
          easing: "linear",
          once: true,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <GlobalContext>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/shopdetail" element={<ShopDetail/>}/>
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/Shop" element={<Shop/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/sign" element={<SignPage/>}/>
        </Routes>
      </Router>
    </GlobalContext>
  );
};

export default App;
