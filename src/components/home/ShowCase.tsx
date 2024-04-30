"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface ShowCaseBanner {
  id: string;
  image: string;
  link: string;
}
const ShowCase: React.FC = () => {
  const [banner, setBanner] = useState<ShowCaseBanner[]>([]);
  useEffect(() => {
    fetch("/fake/showcase.json")
      .then((res) => res.json())
      .then((data) => setBanner(data));
  }, []);
  return (
    <section className="bg-secondary py-4 px-2 md:px-0">
      <div className="my-container">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-4">
          <div>
            <Link href="#">
              <Image
                layout="responsive"
                width={100}
                height={100}
                alt="banner"
                src="https://www.universal.com.bd/image/cache/catalog/AAAA/home-new/banner/video-review-635x354.jpg.webp"
              />
            </Link>
          </div>
          <div>
            <Link href="#">
              <Image
                layout="responsive"
                width={100}
                height={100}
                alt="banner"
                src="https://www.universal.com.bd/image/cache/catalog/AAAA/home-new/banner/video-review-635x354.jpg.webp"
              />
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 justify-between gap-4 pt-4">
          <div>
            <Link href="#">
              <Image
                width={100}
                height={100}
                layout="responsive"
                alt="banner"
                src="https://www.universal.com.bd/image/cache/catalog/AAAA/home-new/banner/Corporate-Office-Pc-420x158.jpg.webp"
              ></Image>
            </Link>
          </div>
          <div>
            <Link href="#">
              <Image
                width={100}
                height={100}
                layout="responsive"
                alt="banner"
                src="https://www.universal.com.bd/image/cache/catalog/AAAA/home-new/banner/Gaming-PC-420x158.jpg.webp"
              ></Image>
            </Link>
          </div>
          <div>
            <Link href="#">
              <Image
                width={100}
                height={100}
                layout="responsive"
                alt="banner"
                src="https://www.universal.com.bd/image/cache/catalog/AAAA/home-new/marvo-banner-800x302.jpg.webp"
              ></Image>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
