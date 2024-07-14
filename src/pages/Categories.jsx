import React, { useContext } from "react";
import TopHeader from "../components/Header/TopHeader";
import CentralHeader from "../components/Header/CentralHeader";
import SideCart from "../components/cart/SideCart";
import SidebarMenu from "../components/Header/SidebarMenu";
import { MainContext } from "../utils/MainContext";
import Footer from "../components/Footer";
import BestSellerCarusel from "../components/Carusel/BestsellerCarusel";
import CategorySection from "../components/category/CategorySection";
import CollectionSection from "../components/CollectionSection";

const Categories = () => {
  const { showSidebar, showCart, toggleOverlay } = useContext(MainContext);

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
        <CategorySection/>
      {/* <BestSellerCarusel /> */}
      <CollectionSection/>
      <Footer />
    </>
  );
};

export default Categories;
