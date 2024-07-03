import React from 'react'
import Header from '../components/Header'
import SidebarMenu from '../components/Header/SidebarMenu'

const Home = () => {
  return (
    <>
    <div className='overlay'></div>
    <Header/>
    <SidebarMenu/>
    </>
  )
}

export default Home