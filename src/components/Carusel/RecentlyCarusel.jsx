import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import black from "../../assets/images/glow_tee_dark_800x.webp";
import hoverImage from "../../assets/images/kynek.webp";
import { MainContext } from "../../utils/MainContext";
import { Link, NavLink } from "react-router-dom";
const RecentlyCarusel = () => {
  const { hoveredIndex, handleMouseEnter, handleMouseLeave, products } =
    useContext(MainContext);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {products.map((item, index) => (
          <div
            key={item.id}
            className="carousel-item"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div>
              {" "}
                <img
                  src={
                    hoveredIndex === index
                      ? hoverImage
                      : `${process.env.REACT_APP_BASE_URL}/${item.productImage}`
                  }
                  alt={item.name}
                ></img>
                {item.old_price > 0 && (
                  <div className="sale">
                    -
                    {Math.round(
                      ((item.old_price - item.price) / item.old_price) * 100
                    )}
                    %
                  </div>
                )}
            </div>
            <div className="name">{item.name}</div>
            <div className="row">
              <span className="price">€{item.price}</span>
              {item.old_price > 0 && (
                <span className="sale-price">€{item.old_price}</span>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecentlyCarusel;
