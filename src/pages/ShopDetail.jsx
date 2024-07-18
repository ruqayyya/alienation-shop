import React from "react";
import TopHeader from "../components/Header/TopHeader";
import CentralHeader from "../components/Header/CentralHeader";
import DetailSection from "../components/shopDetail/DetailSection";
import Footer from "../components/Footer";
import RecentlySection from "../components/category/RecentlySection";
import MeasuresSection from "../components/shopDetail/MeasuresSection";
import AsymmetrikSection from "../components/shopDetail/AsymmetrikSection";
import LogoSection from "../components/shopDetail/LogoSection";
import FabricSection from "../components/shopDetail/FabricSection";

const ShopDetail = () => {
  return (
    <>
      <header>
        <TopHeader />
        <CentralHeader />
      </header>
      <main>
        <DetailSection />
        <MeasuresSection />
        <AsymmetrikSection/>
        <LogoSection/>
        <FabricSection/>
        <RecentlySection />
      </main>
      <Footer />
    </>
  );
};

export default ShopDetail;
