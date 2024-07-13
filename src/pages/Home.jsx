import React, { useContext } from "react";
import Header from "../components/Header";
import SidebarMenu from "../components/Header/SidebarMenu";
import { MainContext } from "../utils/MainContext";
import HeroSection from "../components/HeroSection";
import CollectionSection from "../components/CollectionSection";
import TopHeader from "../components/Header/TopHeader";
import CentralHeader from "../components/Header/CentralHeader";
import BottomHeader from "../components/Header/BottomHeader";
import BlowJobSection from "../components/BlowJobSection";
import DiscoverSection from "../components/DiscoverSection";
import BestSection from "../components/BestSellerSection";
import ZipSection from "../components/ZipSection";
import CollabrotionSection from "../components/CollabrotionSection";
import Footer from "../components/Footer";
import SideCart from "../components/cart/SideCart";

const Home = () => {
  const { showSidebar, showCart, toggleOverlay } = useContext(MainContext);

  return (
    <>
      <div
        className={showSidebar || showCart ? "overlay" : null}
        onClick={toggleOverlay}
      ></div>
      <TopHeader />
      <CentralHeader />
      <BottomHeader />
      {showSidebar ? <SidebarMenu /> : null}
      {showCart?<SideCart/> : null }
      <main>
        <HeroSection />
        <CollectionSection />
        <BlowJobSection/>
        <DiscoverSection/>
        <BestSection/>
        <ZipSection/>
        <CollabrotionSection/>
        <Footer/>
      </main>
    </>
  );
};

export default Home;
