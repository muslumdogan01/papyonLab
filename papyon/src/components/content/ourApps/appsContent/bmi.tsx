"use client";
import React, { useState } from "react";

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
      className="relative flex justify-between items-center border-b pb-12 border-white border-opacity-10"
    >
        <h1 className="font-semibold text-[90px] leading-[111px] tracking-[-3px] hover:from-[#D37AE9] hover:to-[#7E36FC] bg-clip-text bg-gradient-to-r from-[#FFFFFF]  to-[#C2C2C2] text-transparent ">
        BMI Buddy
      </h1>
      <span className="font-semibold text-[20px] leading-[24px]  bg-clip-text bg-gradient-to-r from-[#FFFFFF]  to-[#C2C2C2] text-transparent opacity-40">
        education
      </span>
      {showModal && (
        <div className="absolute top-1/2 left-1/2 translate -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] z-[300] bg-white">
          selaaam
        </div>
      )}
    </div>
  );
};

export default BmiBuddy;
