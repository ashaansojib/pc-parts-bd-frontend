"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Brands from "./Brands";

interface DealsProps {
  id: string;
  title: string;
  image: string;
}
const CustomerDeals: React.FC = () => {
  const [deals, setDeals] = useState<DealsProps[]>([]);
  useEffect(() => {
    fetch("/fake/deals.json")
      .then((res) => res.json())
      .then((data) => setDeals(data));
  }, []);
  return (
    <div className="bg-slate-100 py-4">
      <Brands />
      <div className="my-container grid grid-cols-1 lg:grid-cols-8 md:grid-cols-4 justify-between gap-3">
        {deals.map((deal) => (
          <div key={deal.id} className="deals-container">
            <Image src={deal.image} alt="category" width={160} height={40} />
            <h3>{deal.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerDeals;
