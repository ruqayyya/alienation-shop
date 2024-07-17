import React from "react";
import TopHeader from "../components/Header/TopHeader";
import CentralHeader from "../components/Header/CentralHeader";
import DetailSection from "../components/shopDetail/DetailSection";
import Footer from "../components/Footer";
import RecentlySection from "../components/category/RecentlySection";

const ShopDetail = () => {
  return (
    <>
      <header>
        <TopHeader />
        <CentralHeader />
      </header>
      <DetailSection />
      <RecentlySection />
      <Footer />
    </>
  );
};

export default ShopDetail;
