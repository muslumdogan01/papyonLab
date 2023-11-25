"use client";
import React from "react";
import { UseScrollPosition } from "../scroll/UseScrollPosition";
import Logo from "./logo";


const HeaderMenu = () => {
  const scrollPosition = UseScrollPosition();
  console.log("Scroll position", scrollPosition);

  return (
    <div className="flex w-full h-16 justify-center items-center mt-5">
      <ul className="flex md:space-x-9 lg:space-x-24">
        <li className="font-medium text-base leading-6 text-white cursor-pointer hover:underline">ABOUT US</li>
        <li className="font-medium text-base leading-6 text-white cursor-pointer hover:underline">PAPYON APPS</li>
        <li>
          <Logo />
        </li>
        <li className="font-medium text-base leading-6 text-white cursor-pointer hover:underline">PAPYON BLOG</li>
        <li className="font-medium text-base leading-6 text-white cursor-pointer hover:underline">CONTACT US</li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
