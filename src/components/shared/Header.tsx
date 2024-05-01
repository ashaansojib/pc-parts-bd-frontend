import React from "react";
import TopHeader from "./TopHeader";
import NavBar from "./NavBar";
import { FaBlackTie, FaTrash } from "react-icons/fa";
import { FaBookBookmark, FaDesktop, FaHandshakeSimple } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
      <TopHeader />
      {/* main header area */}
      <div className="my-container flex justify-between items-center h-[74px]">
        <h3 className="text-3xl font-bold w-[150px]">
          PCParts<span className="text-accent">BD</span>
        </h3>
        <input
          type="text"
          className="border border-red-500 p-2 rounded-md w-[300px]"
          placeholder="Search Your Components..."
        />
        <div className="flex justify-between items-center gap-4">
          <div className="py-1 px-2 rounded bg-secondary flex justify-between items-center gap-2">
            <FaTrash />
            <div>
              <h3 className="font-semibold text-sm">Complaint Box</h3>
              <p className="text-xs">Any Problem?</p>
            </div>
          </div>
          <div className="py-1 px-2 rounded bg-secondary flex justify-between items-center gap-2">
            <FaBlackTie />
            <div>
              <h3 className="font-semibold text-sm">Corporate Deal</h3>
              <p className="text-xs">Make A Deal</p>
            </div>
          </div>
          <div className="py-1 px-2 rounded bg-secondary flex justify-between items-center gap-2">
            <FaHandshakeSimple />
            <div>
              <h3 className="font-semibold text-sm">Become A Dealer</h3>
              <p className="text-xs">Business?</p>
            </div>
          </div>
          <div className="py-1 px-2 rounded bg-primary text-white flex justify-between items-center gap-2">
            <FaDesktop />
            <div>
              <h3 className="font-semibold text-sm">PC Builder</h3>
              <p className="text-xs">Configure Now</p>
            </div>
          </div>
          <div className="py-1 px-2 rounded bg-secondary flex justify-between items-center gap-2">
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
