"use client";
import React, { useEffect, useState } from "react";
import { SectionTitle } from "../shared/SectionTitle";
import FeaturedCard from "../cards/FeaturedCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

interface PopularItemProps {
  id: string;
  name: string;
  image: string;
  price: string;
}
const PopularSection: React.FC = () => {
  const [popularItem, setPopularItem] = useState<PopularItemProps[]>([]);
  useEffect(() => {
    fetch("/fake/popular.json")
      .then((res) => res.json())
      .then((data) => setPopularItem(data));
  }, []);
  return (
    <div className="">
      <SectionTitle
        title="Popular Products"
        description="Explore More Popular Items in PCPartsBD!"
      />
      <div className="my-container">
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          navigation={true}
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 1,
            },
            640: {
              width: 640,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 3,
            },
            1024: {
              width: 1024,
              slidesPerView: 4,
            },
            1280: {
              width: 1280,
              slidesPerView: 5,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {popularItem.map((item) => (
            <SwiperSlide key={item.id}>
              <FeaturedCard
                key={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularSection;
