import React from "react";
import TopHeader from "../components/Header/TopHeader";
import CentralHeader from "../components/Header/CentralHeader";
import DetailSection from "../components/shopDetail/DetailSection";
import Footer from "../components/Footer";
import RecentlySection from "../components/category/RecentlySection";
import MeasuresSection from "../components/shopDetail/MeasuresSection";

const ShopDetail = () => {
  return (
    <>
      <header>
        <TopHeader />
        <CentralHeader />
      </header>
      <DetailSection />
      <MeasuresSection/>
      <RecentlySection />
      <Footer />
    </>
  );
};

export default ShopDetail;
