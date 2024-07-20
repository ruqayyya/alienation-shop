import React, { useContext } from "react";
import LoginSection from "../components/login/LoginSection";
import TopHeader from "../components/Header/TopHeader";
import CentralHeader from "../components/Header/CentralHeader";
import Footer from "../components/Footer";
import SidebarMenu from "../components/Header/SidebarMenu";
import { MainContext } from "../utils/MainContext";
import SideCart from "../components/cart/SideCart";

const LoginPage = () => {
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
      <main>
        <LoginSection />
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
