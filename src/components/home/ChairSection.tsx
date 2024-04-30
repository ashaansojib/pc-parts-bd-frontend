"use client";
import React, { useEffect, useState } from "react";
import { SectionTitle } from "../shared/SectionTitle";
import CaseCard from "../cards/CaseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

interface GammingChair {
  id: string;
  name: string;
  image: string;
  price: string;
}

const ChairSection: React.FC = () => {
  const [allChair, setAllChair] = useState<GammingChair[]>([]);

  useEffect(() => {
    fetch("/fake/chair.json")
      .then((res) => res.json())
      .then((data) => setAllChair(data));
  }, []);

  return (
    <div className="py-4">
      <SectionTitle
        title="Gamming Chair Best Deals!"
        description="Check & Get Your Desire Product!"
      />
      <div className="my-container pb-4">
        <Swiper
          className="mySwiper"
          spaceBetween={10}
          slidesPerView={6}
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
              slidesPerView: 6,
            },
          }}
          modules={[Navigation]}
        >
          {allChair.map((chair) => (
            <SwiperSlide key={chair.id}>
              <CaseCard
                name={chair.name}
                image={chair.image}
                price={chair.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ChairSection;
