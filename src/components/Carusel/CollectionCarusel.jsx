import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import black from "../../assets/images/glow_tee_dark_800x.webp";
import hoverImage from "../../assets/images/kynek.webp"; // Hovered state image
import { MainContext } from "../../utils/MainContext";

function CollectionCarousel() {
  const { hoveredIndex, setHoveredIndex, handleMouseEnter, handleMouseLeave } = useContext(MainContext);

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
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className="carousel-item"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={hoveredIndex === index ? hoverImage : black} alt="black" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CollectionCarousel;
