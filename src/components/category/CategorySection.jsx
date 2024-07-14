import React from "react";
import CategoryHeader from "../Header/CategoryHeader";
import random from "../../assets/images/glow_tee_dark_800x.webp";
import { filter } from "../../db/filterDb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft,faAngleRight  } from "@fortawesome/free-solid-svg-icons";

const CategorySection = () => {
  return (
    <section className="category-section">
      <div className="container">
        <div className="main-filter">
          <CategoryHeader />
          <div className="collection-part row">
            <aside className=" filter">
              <span>Filters</span>
              <ul>
                {filter.map((item) => (
                  <li> {item.title}</li>
                ))}
              </ul>
            </aside>
            <div className="collection">
              <div className="image-grid">
                {Array.from(Array(20).keys()).map(
                  (
                    index 
                  ) => (
                    <img key={index} src={random} alt="" />
                  )
                )}
              </div>
              <div className="pagination-part row">
              <FontAwesomeIcon icon={faAngleLeft} />
                <ul className="pagination row">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
