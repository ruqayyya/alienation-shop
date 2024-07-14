import React, { useState } from 'react'
import dual_grid_gray from '../../assets/images/visualization (1).png'
import triple_grid_gray from '../../assets/images/grid (1).png'
import { buttonlist } from '../../db/buttonDb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


const CategoryHeader = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isFirstWhite, setIsFirstWhite] = useState(false);
    const [isSecondWhite, setIsSecondWhite] = useState(false);

    const toggleDropbutton = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    const toggleFirstImage = () => {
        setIsFirstWhite(true);
        setIsSecondWhite(false);
      };
    
      const toggleSecondImage = () => {
        setIsSecondWhite(true);
        setIsFirstWhite(false);
      };
  return (
    <header className='category-header'>
        <div className="container row">
            <div className="grid row">
                <img src={dual_grid_gray} alt="dual-grid" className={`first ${isFirstWhite ? 'iswhite' : ''}`} onClick={toggleFirstImage} />
                <img src={triple_grid_gray} alt="triple-grid" className={`second ${isSecondWhite ? 'iswhite' : ''}`} onClick={toggleSecondImage} />
            </div>
            <div className="button-container">
          <button className="order row" onClick={toggleDropbutton}>order
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
          {isDropdownOpen && (
            <div className="drop-button">
              {buttonlist.map((item) => (
                <button key={item.id}>{item.title}</button>
              ))}
            </div>
          )}
        </div>
        </div>

    </header>
  )
}

export default CategoryHeader