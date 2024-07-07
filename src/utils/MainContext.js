import { createContext, useState } from "react";
export const MainContext=createContext()

const GlobalContext=({children})=>{
    const [showSidebar, setShowSidebar]=useState(false)
    const [showDropdown, setShowDropdown]=useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

    const toggleDropdown=()=>{
        setShowDropdown(!showDropdown)
        console.log('active');

    }
    

    const toggleSidebar=()=>{
        setShowSidebar(!showSidebar)
        console.log('active');
    }
    

    const globalData={ toggleSidebar, showSidebar, toggleDropdown, showDropdown, handleMouseEnter, handleMouseLeave, hoveredIndex}
    return <MainContext.Provider value={globalData}>{children}</MainContext.Provider>

}

export default GlobalContext