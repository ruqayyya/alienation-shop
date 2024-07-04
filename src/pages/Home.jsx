import React, { useContext } from 'react'
import Header from '../components/Header'
import SidebarMenu from '../components/Header/SidebarMenu'
import { MainContext } from '../utils/MainContext'

const Home = () => {
  const{ showSidebar, toggleSidebar}=useContext(MainContext)

  return (
    < >
    <div className={showSidebar?"overlay":null} onClick={toggleSidebar}></div>
    <Header/>
    {showSidebar ? <SidebarMenu /> : null}
    </>
  )
}

export default Home