import React, { useEffect, useContext } from "react";
import CategoryHeader from "../Header/CategoryHeader";
import hoverImage from "../../assets/images/glow_tee_dark_800x.webp";
import black from "../../assets/images/holo_hoodies_homepage_moble_x800.webp";
import { filter } from "../../db/filterDb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { MainContext } from "../../utils/MainContext";

const CategorySection = () => {
  const {
    hoveredIndex,
    handleMouseEnter,
    handleMouseLeave,
    prevPage,
    nextPage,
    handlePageChange,
    currentPage,
    totalPages,
    totalItems,
    startIndex,
    endIndex,
  } = useContext(MainContext);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [currentPage]);

  return (
    <section className="category-section">
      <div className="container">
        <div className="main-filter">
          <CategoryHeader />
          <div className="collection-part row">
            <aside className="filter">
              <span>Filters</span>
              <ul>
                {filter.map((item) => (
                  <li key={item.id}> {item.title}</li>
                ))}
              </ul>
            </aside>
            <div className="collection">
              <div className="image-grid">
                {Array.from(Array(totalItems).keys())
                  .slice(startIndex, endIndex)
                  .map((index) => (
                    <div key={index} className="image-info">
                      <div
                        className="image"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <img
                          src={hoveredIndex === index ? hoverImage : black}
                          alt=""
                        />
                      </div>
                      <div className="sale">22%</div>
                      <span className="name">GREEN FLUORESCENT CARGO</span>
                      <div className="row">
                        <span className="price">€76</span>
                        <span className="sale-price">€76</span>
                      </div>
                    </div>
                  ))}
              </div>

              {totalItems > 20 && (
                <div className="pagination-part row">
                  <ul className="pagination row">
                    <FontAwesomeIcon
                      className="icon"
                      icon={faAngleLeft}
                      onClick={prevPage}
                      style={{
                        cursor: currentPage === 1 ? "not-allowed" : "pointer",
                      }}
                    />
                    {Array.from(Array(totalPages).keys()).map((page) => (
                      <li
                        key={page + 1}
                        className={currentPage === page + 1 ? "active" : ""}
                        onClick={() => handlePageChange(page + 1)}
                      >
                        {page + 1}
                      </li>
                    ))}
                    <FontAwesomeIcon
                      className="icon"
                      icon={faAngleRight}
                      onClick={nextPage}
                      style={{
                        cursor:
                          currentPage === totalPages
                            ? "not-allowed"
                            : "pointer",
                      }}
                    />
                  </ul>
                  <span></span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
