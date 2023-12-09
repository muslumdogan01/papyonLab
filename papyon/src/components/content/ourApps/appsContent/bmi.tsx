"use client";
import React, { useState } from "react";
import BmiItems from "./contentItems";

const BmiBuddy = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      onMouseOver={() => {
        setShowModal(true);
      }}
      onMouseLeave={() => {
        setShowModal(false);
      }}
      className="group/edit relative transition duration-500 ease-in-out hover:border-none cursor-pointer py-[50px] border-b  border-white border-opacity-10  flex  hover:bg-opacity-10 hover:bg-white justify-between items-center"
      >
      <div className="container mx-auto flex  justify-between items-center">
      <h1 className="font-semibold md:text-[90px] text-[60px] px-5 md:px-0 md:leading-[111px] leading-[74px] tracking-[-3px] group-hover/edit:from-[#D37AE9] group-hover/edit:to-[#7E36FC] bg-clip-text bg-gradient-to-r from-[#FFFFFF]  to-[#C2C2C2] text-transparent ">
        BMI Buddy
      </h1>
      <span className="group-hover/edit:opacity-100 opacity-40 font-semibold text-[20px] leading-[24px] md:flex hidden bg-clip-text bg-gradient-to-r from-[#FFFFFF]  to-[#C2C2C2] text-transparent ">
        education
      </span>
      {showModal && (
        <div className="absolute top-1/2 left-1/2 translate -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] z-[300] bg-white md:block hidden">
          <BmiItems />
        </div>
      )}
      </div>
    </div>
  );
};

export default BmiBuddy;
