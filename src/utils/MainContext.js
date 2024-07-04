import { createContext, useState } from "react";
export const MainContext=createContext()

const GlobalContext=({children})=>{
    const [showSidebar, setShowSidebar]=useState(false)

    const toggleSidebar=()=>{
        setShowSidebar(!showSidebar)
        console.log('active');
    }
    

    const globalData={ toggleSidebar, showSidebar}
    return <MainContext.Provider value={globalData}>{children}</MainContext.Provider>

}

export default GlobalContext