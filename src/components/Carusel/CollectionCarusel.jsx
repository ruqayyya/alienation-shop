import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import black from "../../assets/images/glow_tee_dark_800x.webp";

function CollectionCarousel() {
  var settings = {
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
        <img src={black} alt="black" />
        <img src={black} alt="black" />
        <img src={black} alt="black" />
        <img src={black} alt="black" />
        <img src={black} alt="black" />
        <img src={black} alt="black" />
        <img src={black} alt="black" />
      </Slider>
    </div>
  );
}

export default CollectionCarousel;
