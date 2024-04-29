"use client";
import React, { useEffect, useState } from "react";
import { SectionTitle } from "../shared/SectionTitle";
import CaseCard from "../cards/CaseCard";

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
      <div className="my-container grid gap-2 justify-between grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
        {allChair.map((chair) => (
          <CaseCard
            key={chair.id}
            name={chair.name}
            image={chair.image}
            price={chair.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ChairSection;