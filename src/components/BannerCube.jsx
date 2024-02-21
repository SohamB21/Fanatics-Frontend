import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./BannerCube.css";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";

export default function BannerCube() {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://footballmonk.in/wp-content/uploads/2023/06/Barcelona-home-23-24-1.jpg.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://footballmonk.in/wp-content/uploads/2023/06/Real-madrid-home-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://footballmonk.in/wp-content/uploads/2023/06/Man-United-home-23-24-1.jpg.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://footballmonk.in/wp-content/uploads/2023/10/AS-Roma-Home-kit-23-24-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://footballmonk.in/wp-content/uploads/2023/10/Inter-Milan-Home-Kit-23-24-2.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
