import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaArrowCircleRight,
  FaFacebookF,
  FaFacebookMessenger,
  FaHammer,
  FaInstagram,
  FaPhoneAlt,
  FaSearch,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const FooterHead = () => {
  return (
    <>
      <div className="py-2 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between items-center gap-2">
        <div className="text-white">
          <Image src="/white-logo.png" alt="logo" width="180" height="50" />
        </div>
        <div className="col-span-2 md:flex gap-2 items-center">
          <div className="flex gap-2 justify-center items-center text-secondary text-center border rounded-full font-semibold px-4 py-2 border-gray-400 w-[250px]">
            <FaPhoneAlt className="text-2xl " />
            <div>
              <p>Custom PC Builder</p>
              <p>919232</p>
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center text-secondary text-center border rounded-full font-semibold px-4 py-2 border-gray-400 w-[250px]">
            <FaPhoneAlt className="text-2xl " />
            <div>
              <p>Computer Components</p>
              <p>+8801892932859</p>
            </div>
          </div>
        </div>
        <div className="text-white flex gap-2 items-center">
          <Link href="#">
            <FaFacebookF className="text-4xl rounded-md bg-primary p-2" />
          </Link>
          <Link href="#">
            <FaFacebookMessenger className="text-4xl rounded-md bg-[#0683C9] p-2" />
          </Link>
          <Link href="#">
            <FaWhatsapp className="text-4xl rounded-md bg-[#44944D] p-2" />
          </Link>
          <Link href="#">
            <FaYoutube className="text-4xl rounded-md bg-accent p-2" />
          </Link>
          <Link href="#">
            <FaInstagram className="text-4xl rounded-md bg-[#EC9B5F] p-2" />
          </Link>
        </div>
      </div>
      <div className="py-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between gap-2">
        <div className="space-y-3">
          <h3 className="text-white font-bold pb-2">About PC Parts Bd</h3>
          <div className="text-secondary flex items-center gap-2">
            <FaSearch className="text-xl" />
            <div>
              <h4 className="text-sm font-semibold">Our All Branchs</h4>
              <p className="text-sm text-gray-400 hover:text-accent">
                AgarGong, Dhaka-1202, Bangladesh
              </p>
            </div>
          </div>
          <div className="text-secondary flex items-center gap-2">
            <FaHammer className="text-xl" />
            <div>
              <h4 className="text-sm font-semibold">Our Service Center</h4>
              <p className="text-sm text-gray-400 hover:text-accent">
                73, Rahman Mansion, 4th Floor New Elephant Road, Dhaka-1205
              </p>
            </div>
          </div>
          <div className="text-secondary flex items-center gap-2">
            <FaLocationPin className="text-xl" />
            <div>
              <h4 className="text-sm font-semibold">Our Head Office</h4>
              <p className="text-sm text-gray-400 hover:text-accent">
                73, Rahman Mansion, 4th Floor New Elephant Road, Dhaka-1205
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 text-center">
          <h3 className="text-white font-bold pb-2">Important Links</h3>
          <div className=" flex gap-2 justify-around">
          <div className="text-secondary space-y-3">
              <Link href="#" className="footer-link"><FaArrowCircleRight /> About Us</Link>
              <Link href="#" className="footer-link"><FaArrowCircleRight /> Contact Us</Link>
              <Link href="#" className="footer-link"><FaArrowCircleRight /> Privacy Policy</Link>
              <Link href="#" className="footer-link"><FaArrowCircleRight /> Terms & Condition</Link>
              <Link href="#" className="footer-link"><FaArrowCircleRight /> Refund & Return Policy</Link>
          </div>
          <div className="text-secondary space-y-3">
              <Link href="#" className="footer-link"><FaArrowCircleRight /> Online Delivery</Link>
              <Link href="#" className="footer-link"><FaArrowCircleRight /> EMI Service</Link>
              <Link href="#" className="footer-link"><FaArrowCircleRight /> Blogs</Link>
              <Link href="#" className="footer-link"><FaArrowCircleRight /> Career</Link>
              <Link href="#" className="footer-link"><FaArrowCircleRight /> E-Catalogue</Link>
          </div>
          </div>
        </div>
        <div className="text-white">
          <h3 className="text-white font-bold">Distributor Ship</h3>
          <Image width="200" height="150" src="/distributor.webp" alt="distributor" />
        </div>
      </div>
    </>
  );
};

export default FooterHead;
