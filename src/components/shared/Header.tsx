import React from "react";
import TopHeader from "./TopHeader";
import NavBar from "./NavBar";
import { FaBlackTie, FaSearch, FaTrash } from "react-icons/fa";
import { FaBookBookmark, FaDesktop, FaHandshakeSimple } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
      <TopHeader />
      {/* main header area */}
      <div className="header-container">
        {/* logo area */}
        <h3 className="text-3xl font-bold w-[150px]">
          PCParts<span className="text-accent">BD</span>
        </h3>
        {/* search bar */}
        <div className="relative md:col-span-2">
          <input
            type="text"
            className="border border-red-500 p-2 rounded-md w-full"
            placeholder="Search Your Components..."
          />
          <FaSearch className="absolute top-3 cursor-pointer right-4" />
        </div>
        {/* header deals options */}
        <div className="header-deals">
          <div className="header-deal-container">
            <FaTrash />
            <div>
              <h3 className="font-semibold text-sm">Complaint Box</h3>
              <p className="text-xs">Any Problem?</p>
            </div>
          </div>
          <div className="header-item">
            <FaBlackTie />
            <div>
              <h3 className="font-semibold text-sm">Corporate Deal</h3>
              <p className="text-xs">Make A Deal</p>
            </div>
          </div>
          <div className="header-item">
            <FaHandshakeSimple />
            <div>
              <h3 className="font-semibold text-sm">Become A Dealer</h3>
              <p className="text-xs">Business?</p>
            </div>
          </div>
          <div className="header-item">
            <FaDesktop />
            <div>
              <h3 className="font-semibold text-sm">PC Builder</h3>
              <p className="text-xs">Configure Now</p>
            </div>
          </div>
          <div className="header-item">
            <FaBookBookmark />
            <div>
              <h3 className="font-semibold text-sm">Blogs</h3>
              <p className="text-xs">Business?</p>
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
