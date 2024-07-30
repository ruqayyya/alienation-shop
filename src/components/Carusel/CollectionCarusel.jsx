import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hoverImage from "../../assets/images/kynek.webp";
import { MainContext } from "../../utils/MainContext";
import { NavLink } from "react-router-dom";

function CollectionCarousel() {
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
            key={index}
            className="carousel-item"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div>
              {" "}
              <NavLink to={"/shopdetail"}>
                <img
                  src={hoveredIndex === index ? hoverImage :  `${process.env.REACT_APP_BASE_URL}/${item.productImage}`}
                  alt={item.name}
                />
              </NavLink>
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
            <div className="price">€{item.price}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CollectionCarousel;
