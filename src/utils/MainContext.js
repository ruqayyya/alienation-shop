import { createContext, useState } from "react";
export const MainContext=createContext()

const GlobalContext=({children})=>{
    const [showSidebar, setShowSidebar]=useState(false)
    const [showDropdown, setShowDropdown]=useState(false)
    const toggleDropdown=()=>{
        setShowDropdown(!showDropdown)
        console.log('active');

    }
    

    const toggleSidebar=()=>{
        setShowSidebar(!showSidebar)
        console.log('active');
    }
    

    const globalData={ toggleSidebar, showSidebar, toggleDropdown, showDropdown}
    return <MainContext.Provider value={globalData}>{children}</MainContext.Provider>

}

export default GlobalContext