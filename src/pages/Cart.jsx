import React, { useContext } from "react";
import CartSection from "../components/cart/CartSection";
import TopHeader from "../components/Header/TopHeader";
import CentralHeader from "../components/Header/CentralHeader";
import Footer from "../components/Footer";
import RecentlySection from "../components/category/RecentlySection";
import { MainContext } from "../utils/MainContext";
import SidebarMenu from "../components/Header/SidebarMenu";
import SideCart from "../components/cart/SideCart";

const Cart = () => {
  const { showSidebar, showCart, toggleOverlay, showFilter, showOrder } =
    useContext(MainContext);
  return (
    <>
      <div
        className={showSidebar || showCart ? "overlay" : null}
        onClick={toggleOverlay}
      ></div>
      {showSidebar ? <SidebarMenu /> : null}
      {showCart ? <SideCart /> : null}
      <TopHeader />
      <CentralHeader />

      <main>
        <CartSection />
        <RecentlySection />
      </main>
      <Footer />
    </>
  );
};

export default Cart;
