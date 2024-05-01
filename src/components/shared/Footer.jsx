import React from "react";
import FooterHead from "./FooterHead";
import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-accent px-2 py-6">
      <div className="my-container">
        {/* footer head */}
        <FooterHead />
        <p className="text-secondary text-sm text-center">All Rights Are Reserved By PCPartsBD | Made in <FaHeart className="text-red-500 inline" /> Bangladesh</p>
      </div>
    </footer>
  );
};

export default Footer;
