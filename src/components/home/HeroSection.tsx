"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const HeroSection = () => {
  return (
    <div className="py-4 bg-slate-100">
      <Swiper
        className="mySwiper md:h-[350px] lg:h-[400px] my-container"
        modules={[Autoplay, Pagination]}
        pagination={true}
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
      >
        <SwiperSlide>
          <Image
            src="/banner/banner-1.jpg"
            alt="banner"
            layout="responsive"
            height={100}
            width={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/banner/banner-2.jpeg"
            alt="banner"
            layout="responsive"
            height={100}
            width={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/banner/banner-3.jpg"
            alt="banner"
            layout="responsive"
            height={100}
            width={100}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
