import Image from "next/image";
import Link from "next/link";
import React from "react";
interface CategoryProps {
  name: string;
  image: string;
}
interface SingleCategroyProps {
  category: CategoryProps;
}
const Category: React.FC<SingleCategroyProps> = ({ category }) => {
  const { name, image } = category;
  return (
    <div className="category-container">
      <Image
        src={image}
        alt="category"
        width={160}
        height={40}
      />
      <Link href="#"><h2 className="text-xl font-medium">{name}</h2></Link>
    </div>
  );
};

export default Category;
