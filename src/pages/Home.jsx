import React, { useContext } from "react";
import Header from "../components/Header";
import SidebarMenu from "../components/Header/SidebarMenu";
import { MainContext } from "../utils/MainContext";
import HeroSection from "../components/HeroSection";
import CollectionSection from "../components/CollectionSection";
import TopHeader from "../components/Header/TopHeader";
import CentralHeader from "../components/Header/CentralHeader";
import BottomHeader from "../components/Header/BottomHeader";

const Home = () => {
  const { showSidebar, toggleSidebar } = useContext(MainContext);

  return (
    <>
      <div
        className={showSidebar ? "overlay" : null}
        onClick={toggleSidebar}
      ></div>
      <TopHeader />
      <CentralHeader />
      <BottomHeader />
      {showSidebar ? <SidebarMenu /> : null}
      <main>
        <HeroSection />
        <CollectionSection />
      </main>
    </>
  );
};

export default Home;
