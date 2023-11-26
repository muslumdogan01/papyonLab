"use client";
import React from "react";
import { UseScrollPosition } from "../scroll/UseScrollPosition";
import Logo from "./logo";

const HeaderMenu = () => {
  const scrollPosition = UseScrollPosition();
  console.log("Scroll position", scrollPosition);

  function classNames(...classes) {
    return classes.filter(Boolean).join("");
  }



  return (
    <div className="flex w-full h-16 justify-center items-center mt-5">
      <div
        className={classNames(
          scrollPosition > 0 ? "backdrop-blur-sm px-12	h-16 rounded-[70px]" : "bg-transparent",
          "  flex flex-col justify-center items-center fixed"
        )}
      >
        <ul className="flex md:space-x-9 lg:space-x-24">
          <li className="font-medium text-base leading-6 text-white cursor-pointer hover:underline">
            ABOUT US
          </li>
          <li className="font-medium text-base leading-6 text-white cursor-pointer hover:underline">
            PAPYON APPS
          </li>
          <li>
            <Logo />
          </li>
          <li className="font-medium text-base leading-6 text-white cursor-pointer hover:underline">
            PAPYON BLOG
          </li>
          <li className="font-medium text-base leading-6 text-white cursor-pointer hover:underline">
            CONTACT US
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMenu;
