"use client";
import React from "react";
import HeaderMenu from "./menu";
import { UseScrollPosition } from "../scroll/UseScrollPosition";

const Header = () => {


  return (
    <div className="w-full flex justify-center items-center">
      <HeaderMenu />
    </div>
  );
};

export default Header;
