import React, { useContext } from "react";
import TopHeader from "../components/Header/TopHeader";
import CentralHeader from "../components/Header/CentralHeader";
import DetailSection from "../components/shopDetail/DetailSection";
import Footer from "../components/Footer";
import RecentlySection from "../components/category/RecentlySection";
import MeasuresSection from "../components/shopDetail/MeasuresSection";
import AsymmetrikSection from "../components/shopDetail/AsymmetrikSection";
import LogoSection from "../components/shopDetail/LogoSection";
import FabricSection from "../components/shopDetail/FabricSection";
import CompletedSection from "../components/shopDetail/CompletedSection";
import SidebarMenu from "../components/Header/SidebarMenu";
import SideCart from "../components/cart/SideCart";
import { MainContext } from "../utils/MainContext";

const ShopDetail = () => {
  const { showSidebar, showCart, toggleOverlay } = useContext(MainContext);

  return (
    <>
      <div
        className={showSidebar || showCart ? "overlay" : null}
        onClick={toggleOverlay}
      ></div>
      {showSidebar ? <SidebarMenu /> : null}
      {showCart ? <SideCart /> : null}
      <header>
        <TopHeader />
        <CentralHeader />
      </header>
      <main>
        <DetailSection />
        <MeasuresSection
          title={"GREEN FLUORESCENT CARGO"}
          details={
            "Cargo pants with fluorescent side bands featuring two additional pockets above the knees, one of which features the Alienation logo sewn on. Perfect to match with the Alien Hoodie."
          }
        />
        <AsymmetrikSection />
        <LogoSection />
        <FabricSection />
        <CompletedSection />
        <RecentlySection />
      </main>
      <Footer />
    </>
  );
};

export default ShopDetail;
