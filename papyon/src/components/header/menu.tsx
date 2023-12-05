"use client";
import React, { useState } from "react";
import { UseScrollPosition } from "../scroll/UseScrollPosition";
import Logo from "./logo";
import MenuDropdown from "./menuDropdown";

const HeaderMenu = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const scrollPosition = UseScrollPosition();

  function classNames(
    ...classes: (string | undefined | null | false | 0)[]
  ): string {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="flex w-full h-16 justify-center items-center mt-5 ">
      <div
        className={classNames(
          scrollPosition > 0
            ? "backdrop-blur-sm z-[100] px-12 h-16 rounded-[70px]"
            : "bg-transparent z-[100]",
          "  flex flex-col justify-center items-center fixed "
        )}
      >
        <ul className="flex md:space-x-9 lg:space-x-24 ">
          <li className="font-medium text-base leading-6 text-white cursor-pointer relative">
            ABOUT US
            <span className="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 hover:rounded-[10px] text-white z-50 w-[151px] h-11  hover:border-opacity-10 hover:border border-white hover:bg-white  hover:bg-opacity-10"></span>
          </li>
          <li
            className="font-medium text-base leading-6 text-white cursor-pointer  relative"
            onMouseEnter={() => setShowDropdown(true)}
          >
            PAPYON APPS
            <span
              className={`${
                showDropdown
                  ? " rounded-[10px] text-white z-50  border-opacity-10 border border-white bg-white bg-opacity-10"
                  : ""
              }
            absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 hover:rounded-[10px] text-white z-50 w-[151px] h-11  hover:border-opacity-10 hover:border border-white hover:bg-white  hover:bg-opacity-10`}
            ></span>
          </li>

          <div
            className={classNames(
              scrollPosition > 0 ? "fixed z-[100]" : "z-[100] fixed",
              "w-full fixed"
            )}
          >
            {showDropdown && <MenuDropdown setShowDropdown={setShowDropdown} />}
          </div>

          <li>
            <Logo />
          </li>
          <li className="font-medium text-base leading-6 text-white cursor-pointer relative">
            PAPYON BLOG
            <span className="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 hover:rounded-[10px] text-white z-50 w-[151px] h-11  hover:border-opacity-10 hover:border border-white hover:bg-white  hover:bg-opacity-10"></span>
          </li>
          <li className="font-medium text-base leading-6 text-white cursor-pointer relative">
            CONTACT US
            <span className="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 hover:rounded-[10px] text-white z-50 w-[151px] h-11  hover:border-opacity-10 hover:border border-white hover:bg-white  hover:bg-opacity-10"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMenu;
