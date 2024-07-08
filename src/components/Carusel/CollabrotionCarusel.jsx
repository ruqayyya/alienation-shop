import React, { useContext, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import black from "../../assets/images/glow_tee_dark_800x.webp";
import hoverImage from "../../assets/images/kynek.webp";
import { MainContext } from "../../utils/MainContext";

function CollabrotionCarusel() {
  const { hoveredIndex, handleMouseEnter, handleMouseLeave } =
    useContext(MainContext);

    const [display, setDisplay] = useState(true);
    const [width, setWidth] = useState(600);
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
  return (
    <div className="collabrotion-container">
        <button className="button" onClick={() => setWidth(width + 100)}>
        {" "}
        increase{" "}
      </button>
      <button className="button" onClick={() => setWidth(width - 100)}>
        {" "}
        decrease{" "}
      </button>
      <button className="button" onClick={() => setDisplay(!display)}>
        {" "}
        toggle{" "}
      </button>
      <div
        style={{
          width: width + "px",
          display: display ? "block" : "none"
        }}
      ></div>
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
              <img
                src={hoveredIndex === index ? hoverImage : black}
                alt="black"
              />
              <div className="sale">-22%</div>
            </div>

          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CollabrotionCarusel;
