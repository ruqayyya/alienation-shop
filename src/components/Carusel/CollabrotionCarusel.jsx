import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import black from "../../assets/images/collaimage.avif";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { collaboration } from "../../db/collaborationDb";

function CollabrotionCarusel() {
  // const slides = Array.from({ length: 9 }).map(
  //   (_, index) => `Slide ${index + 1}`
  // );

  return (
    <div className="collaboration-container" style={{ width: "100%" }}>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={8}
        pagination={false}
        navigation={true}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {collaboration.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.img} alt={item.name} />
            <div className="userinfo">
              {" "}
              <div className="overlay"></div>
              <div className="username">{item.name}</div>
              <div className="usermail">{item.mail}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CollabrotionCarusel;
