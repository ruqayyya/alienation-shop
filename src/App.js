import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from 'react'
import Home from './pages/Home'
import GlobalContext from './utils/MainContext'
import Header from "./components/Header";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 100,
      easing: "linear",
      once: true,
    });

    const handleScroll = () => {
      if (window.scrollY > 5000) {
        AOS.init({ disable: true });
      } else {
        AOS.init({
          duration: 100,
          easing: "linear",
          once: true,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <GlobalContext>
    <Home/>
    </GlobalContext>
  )
}

export default App
