import React, { useContext } from 'react'
import Header from '../components/Header'
import SidebarMenu from '../components/Header/SidebarMenu'
import { MainContext } from '../utils/MainContext'
import HeroSection from '../components/HeroSection'

const Home = () => {
  const{ showSidebar, toggleSidebar}=useContext(MainContext)

  return (
    < >
    <div className={showSidebar?"overlay":null} onClick={toggleSidebar}></div>
    <Header/>
    {showSidebar ? <SidebarMenu /> : null}
    <HeroSection/>
    </>
  )
}

export default Home