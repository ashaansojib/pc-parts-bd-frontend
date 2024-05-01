"use client";
import React, { useEffect, useState } from "react";
import { SectionTitle } from "../shared/SectionTitle";
import CaseCard from "../cards/CaseCard";

interface Revenger {
  id: string;
  name: string;
  image: string;
  price: string;
}
const RevengerSection: React.FC = () => {
  const [revengers, setRevenger] = useState<Revenger[]>([]);
  useEffect(() => {
    fetch("/fake/case.json")
      .then((res) => res.json())
      .then((data) => setRevenger(data));
  }, []);

  return (
    <div className="bg-secondary py-4">
      <SectionTitle
        title="Explore Avenger"
        description="A Big Options For Choose Avengers Case"
      />
      <div className="my-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 justify-between gap-2 h-full">
        {revengers.map((revenger) => (
          <CaseCard
            key={revenger.id}
            name={revenger.name}
            image={revenger.image}
            price={revenger.price}
          />
        ))}
      </div>
    </div>
  );
};

export default RevengerSection;
