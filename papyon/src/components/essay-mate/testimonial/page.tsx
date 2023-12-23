"use client";
import React from "react";
import HorizontalComponent from "./horizontalComponent";
import Image from "next/image";
import Cart from "./cart";

const Testimonial = () => {
  return (
    <div className="w-full">
      <div className="mt-[100px] flex flex-col">
        <h1 className="text-[#8038FD] font-semibold text-base leading-6 text-center ">
          Testimonial
        </h1>
        <p className="font-semibold text-[40px] leading-[49px] -tracking-3 text-center mt-[10px] ">
          What people are saying?
        </p>
      </div>
      <div className="hidden md:flex justify-center mt-[30px] space-x-[30px] ">
        <Cart />
      </div>
      <div className="block md:hidden">
        <HorizontalComponent />
      </div>
    </div>
  );
};

export default Testimonial;
