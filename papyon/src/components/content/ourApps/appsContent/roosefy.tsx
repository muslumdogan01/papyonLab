"use client";
import React, { useState } from "react";
import RoosefyItems from "./contentItems";

const Roosefy = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        onMouseOver={() => {
          setShowModal(true);
        }}
        onMouseLeave={() => {
          setShowModal(false);
        }}
        className="group/edit relative cursor-pointer h-full border-b py-[50px] hover:bg-opacity-10 transition duration-500 ease-in-out hover:bg-white border-white border-opacity-10  flex   justify-between items-center"
      >
          <div className="container mx-auto flex h-full justify-between items-center">
          <h1 className="font-semibold text-[90px] leading-[111px] tracking-[-3px] group-hover/edit:from-[#D37AE9] group-hover/edit:to-[#7E36FC] bg-clip-text bg-gradient-to-r from-[#FFFFFF]  to-[#C2C2C2] text-transparent ">
          Roosefy
        </h1>
        <span className="group-hover/edit:opacity-100 opacity-40 font-semibold text-[20px] leading-[24px]  bg-clip-text bg-gradient-to-r from-[#FFFFFF]  to-[#C2C2C2] text-transparent ">
          design
        </span>
        {showModal && (
          <div className="absolute top-1/2 left-1/2  translate -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] z-[300] bg-white">
            <RoosefyItems/>
          </div>
        )}
          </div>
      </div>
    </>
  );
};

export default Roosefy;
