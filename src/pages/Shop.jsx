import React from "react";
import ShopHeader from "../components/Header/ShopHeader";
import ShopSection from '../components/shop/ShopSection'
import TopShop from "../components/shop/TopShop";

const Shop = () => {
  return (
    <>
      <ShopHeader />
      <TopShop/>
      <main>

        <ShopSection />
      </main>
    </>
  );
};

export default Shop;
