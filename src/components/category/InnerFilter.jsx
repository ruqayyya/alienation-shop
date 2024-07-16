import React from "react";
import { filter } from "../../db/filterDb";

const InnerFilter = () => {
  return (
    <div
      className="inner-filter"
      data-aos="fade-left"
      data-aos-offset="400"
      data-aos-easing="easer"
      data-aos-duration="400"
    >
      <div className="container">
        <div className="filter-info">
          <span>Filters</span>
          <ul>
            {filter.map((item) => (
              <li key={item.id}> {item.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InnerFilter;
