import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import black from "../../assets/images/glow_tee_dark_800x.webp";
import hoverImage from "../../assets/images/kynek.webp";
import { MainContext } from "../../utils/MainContext";
import { NavLink } from "react-router-dom";

function BestSellerCarusel() {
  const { hoveredIndex, handleMouseEnter, handleMouseLeave } =
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
        {[...Array(8)].map((_, index) => (
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
                  src={hoveredIndex === index ? hoverImage : black}
                  alt="black"
                />
              </NavLink>
              <div className="sale">-22%</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BestSellerCarusel;
