import React, { useEffect, useContext, useState } from "react";
import CategoryHeader from "../Header/CategoryHeader";
import hoverImage from "../../assets/images/glow_tee_dark_800x.webp";
import { filter } from "../../db/filterDb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { MainContext } from "../../utils/MainContext";
import { NavLink } from "react-router-dom";

const CategorySection = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 4;
  const items = Array.isArray(data) ? data : Object.values(data);
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const {
    dual,
    triple,
    single,
    hoveredIndex,
    handleMouseEnter,
    handleMouseLeave,
  } = useContext(MainContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

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
              <div
                className={
                  triple
                    ? "triple-grid"
                    : dual
                    ? "dual-grid"
                    : single
                    ? "single-grid"
                    : "triple-grid"
                }
              >
                {items.slice(startIndex, endIndex).map((item, index) => (
                  <div key={item.id} className="image-info">
                    <div
                      className="image"
                      onMouseEnter={() => handleMouseEnter(startIndex + index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <NavLink to={"/shopdetail"}>
                        <img
                          src={
                            hoveredIndex === startIndex + index
                              ? hoverImage
                              : `${process.env.REACT_APP_BASE_URL}/${item.productImage}`
                          }
                          alt={item.name}
                        />
                      </NavLink>
                    </div>
                    {item.old_price > 0 && <div className="sale">-{Math.round(((item.old_price - item.price) / item.old_price) * 100)}%</div>}
                    <span className="name">{item.name}</span>
                    <div className="row">
                      <span className="price">€{item.price}</span>
                      {item.old_price > 0 && (
                        <span className="sale-price">€{item.old_price}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {totalItems > ITEMS_PER_PAGE && (
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
