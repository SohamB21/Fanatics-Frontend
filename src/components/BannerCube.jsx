import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./BannerCube.css";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";

export default function BannerCube({ jerseys }) {
  if (!jerseys || jerseys.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-lightBlue font-inter">
        Loading...
      </div>
    );
  }
  console.log("BannerCube:", jerseys);

  return (
    <Swiper
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[EffectCube, Pagination]}
      className="mySwiper"
    >
      {jerseys &&
        jerseys.map((jersey, index) => (
          <SwiperSlide key={index}>
            <img src={jersey.image_url} alt={jersey.team_name} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
