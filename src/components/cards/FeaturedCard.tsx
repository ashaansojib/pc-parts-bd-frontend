import Image from "next/image";
import Link from "next/link";
import React from "react";
interface FeaturedCardProps {
  name: string;
  image: string;
  price: string;
}
const FeaturedCard: React.FC<FeaturedCardProps> = ({ name, image, price }) => {
  return (
    <div className="featured-card-container">
      <div className="relative">
        <Image
          layout="responsive"
          src={image}
          alt={name}
          width={250}
          height={80}
        />
        <h2 className="text-sm font-medium text-primary pb-2">{name}</h2>
        <span className="text-red-500 absolute left-0 top-0 font-semibold">
          15%
        </span>
      </div>
      <div className="w-full">
        <p className="text-accent">BDT: {price}</p>
        <Link href="#">
          <button className="add-to-card-btn">ADD TO CARD</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCard;
