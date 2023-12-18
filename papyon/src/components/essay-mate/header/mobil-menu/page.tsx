"use client";
import React, { useState } from "react";
import Logo from "../logo";
import Hamburger from "./hamburger/page";
import MenuLinkComponent from "./hamburger/menu";

const MobileMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <>
      <div className="w-full  bg-[#00030F] fixed z-[9000]">
        <div className="w-full flex justify-between items-center p-5 relative">
        <Logo width={168} height={20} />
        <Hamburger isOpenMenu={isOpenMenu} toggleMenu={toggleMenu} />

        <MenuLinkComponent isOpenMenu={isOpenMenu} />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
