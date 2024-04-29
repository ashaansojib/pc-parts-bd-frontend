import React from "react";
import FooterHead from "./FooterHead";

const Footer = () => {
  return (
    <footer className="bg-[#021327] p-4">
      <div className="my-container">
        {/* footer head */}
        <FooterHead />
        <p className="text-secondary text-sm text-center">All Rights Are Reserved By PCPartsBD | Made in Bangladesh</p>
      </div>
    </footer>
  );
};

export default Footer;
