import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from 'react'
import Home from './pages/Home'
import GlobalContext from './utils/MainContext'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 100, 
      easing: "linear", 
      once: false, 
    });
  }, []);
  return (
    <GlobalContext>
    <Home/>
    </GlobalContext>
  )
}

export default App
