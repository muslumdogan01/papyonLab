"use client";
import React from "react";
import { Link } from "react-scroll";
import { UseScrollPosition } from "../scroll/UseScrollPosition";
import Image from "next/image";

export default function TopLink() {
  const scrollPosition = UseScrollPosition();
  return (
    <div className={`${scrollPosition > 100 ? "block" : "hidden"}`}>
      <Link
        to="header-wrap"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <span
          id="top-link"
          className="cursor-pointer back-to-top w-8 h-8 fixed bottom-0 right-0 mb-5 mr-5 flex items-center justify-center rounded-full bg-white bg-opacity-10 z-[400] duration-300 "
        >
          <Image src="/topLink.svg" alt="top" width={32} height={32} />
        </span>
      </Link>
    </div>
  );
}
