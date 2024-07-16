import React, { useContext } from "react";
import TopHeader from "../components/Header/TopHeader";
import CentralHeader from "../components/Header/CentralHeader";
import SideCart from "../components/cart/SideCart";
import SidebarMenu from "../components/Header/SidebarMenu";
import { MainContext } from "../utils/MainContext";
import Footer from "../components/Footer";
import CategorySection from "../components/category/CategorySection";
import FilterBar from "../components/category/FilterBar";
import OrderCart from "../components/category/OrderCart";
import RecentlySection from "../components/category/RecentlySection";

const Categories = () => {
  const { showSidebar, showCart, toggleOverlay, showFilter, showOrder } =
    useContext(MainContext);

  return (
    <>
      <div
        className={
          showSidebar || showCart || showFilter || showOrder ? "overlay" : null
        }
        onClick={toggleOverlay}
      ></div>
      {showSidebar ? <SidebarMenu /> : null}
      {showCart ? <SideCart /> : null}
      {showFilter ? <FilterBar /> : null}
      {showOrder ? <OrderCart /> : null}
      <TopHeader />
      <CentralHeader />
      <CategorySection />
      <RecentlySection/>
      <Footer />
    </>
  );
};

export default Categories;
