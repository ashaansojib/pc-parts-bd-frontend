"use client";
import React, { useEffect, useState } from "react";
import { SectionTitle } from "../shared/SectionTitle";
import Category from "../cards/Category";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface CategoryProps {
  id: string;
  name: string;
  image: string;
}

const FeaturedSection: React.FC = () => {
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    fetch("/fake/category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="bg-secondary px-2 py-4">
      <SectionTitle
        title="Featured Category"
        description="Get Your Query From Featured Category"
      />
      <div className="my-container">
        <Swiper
          className="mySwiper"
          spaceBetween={10}
          slidesPerView={6}
          autoplay={{delay: 3000, pauseOnMouseEnter: true}}
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
          modules={[Navigation, Autoplay]}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <Category category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedSection;
