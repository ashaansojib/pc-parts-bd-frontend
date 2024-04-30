"use client";
import React, { useEffect, useState } from "react";
import { SectionTitle } from "../shared/SectionTitle";
import FeaturedCard from "../cards/FeaturedCard";
import { Swiper, SwiperSlide } from "swiper/react";

interface Arrival {
  id: string;
  name: string;
  image: string;
  price: string;
}
const NewArrival: React.FC = () => {
  const [allArrival, setAllArrival] = useState<Arrival[]>([]);
  useEffect(() => {
    fetch("/fake/arrival.json")
      .then((res) => res.json())
      .then((data) => setAllArrival(data));
  }, []);
  return (
    <div className="py-4">
      <SectionTitle
        title="New Arrival!"
        description="Check & Purchage Your Desire Products!"
      />
      <div className="my-container">
        <Swiper
          className="mySwiper"
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
            1280: {
              width: 1280,
              slidesPerView: 5,
            },
          }}
        >
          {allArrival.map((arrival) => (
            <SwiperSlide key={arrival.id}>
              <FeaturedCard
                name={arrival.name}
                image={arrival.image}
                price={arrival.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrival;
