import React, { useContext, useState } from "react";
import dual_grid_gray from "../../assets/images/visualization (1).png";
import square from "../../assets/images/black-square.png";
import triple_grid_gray from "../../assets/images/grid (1).png";
import { buttonlist } from "../../db/buttonDb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { MainContext } from "../../utils/MainContext";

const CategoryHeader = () => {
  const {
    toggleFilter,
    toggleOrder,
    isSecondWhite,
    isFirstWhite,
    handleSingle,
    handleDual,
    handleTriple,
    setSortedProducts,
    products,
    handleSort
  } = useContext(MainContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropbutton = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleButtonClick = () => {
    if (window.innerWidth <= 1066) {
      toggleOrder();
    } else {
      toggleDropbutton();
    }
  };



  return (
    <header className="category-header">
      <div className="container row">
        <div className="grid row">
          <img
            src={dual_grid_gray}
            alt="dual-grid"
            className={`first ${isFirstWhite ? "iswhite" : ""}`}
            onClick={handleDual}
          />
          <img
            src={triple_grid_gray}
            alt="triple-grid"
            className={`second ${isSecondWhite ? "iswhite" : ""}`}
            onClick={handleTriple}
          />
        </div>
        <span className="first-liner"></span>
        <div className="button-container row">
          <span className="first-liner"></span>
          <button className="order" onClick={handleButtonClick}>
            order
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
          {isDropdownOpen && (
            <div className="drop-button">
              {buttonlist.map((item) => (
                <button key={item.id} onClick={() => handleSort(item.id)}>
                  {item.title}
                </button>
              ))}
            </div>
          )}
          <span className="middle-liner"></span>
          <button className="filter" onClick={toggleFilter}>
            filters
          </button>
        </div>
        <span className="middle-liner"></span>
        <div className="grid closed row">
          <img
            src={square}
            alt="square"
            className={`second ${isSecondWhite ? "iswhite" : ""}`}
            onClick={handleSingle}
          />
          <img
            src={dual_grid_gray}
            alt="dual-grid"
            className={`first ${isFirstWhite ? "iswhite" : ""}`}
            onClick={handleDual}
          />
        </div>
      </div>
    </header>
  );
};

export default CategoryHeader;
