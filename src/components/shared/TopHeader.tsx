import Link from "next/link";
import React from "react";
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="bg-accent text-white p-3 font-semibold text-sm hidden md:block">
      <div className="my-container md:flex justify-between items-center">
        <Link href="#">
          <h4 className="hover:text-secondary ">
            Welcome to PcPartsBd For Exploring !
          </h4>
        </Link>
        <p className="flex gap-1 items-center justify-center">
          <FaPhoneAlt />
          <span className="hover:text-secondary">
            +880,1892939284, +900,29101819
          </span>
        </p>
        <Link href="/dashboard" className="flex gap-1 items-center justify-end">
          <FaUserCircle />
          <span>Account</span>
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
