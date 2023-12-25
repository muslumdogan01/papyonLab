"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import FaqItems from "./faqItems";
import { motion, AnimatePresence } from "framer-motion";
import faqsData from "./data.json";

const FaqContent = () => {
  // const [faqs, setFAQs] = useState([]);

  return (
    <div
      id="deneme"
      className="w-full flex justify-center items-center relative mt-[30px] md:mb-[160px] mb-[60px] "
    >
      <div className="w-[840px] flex flex-col rounded-[20px] border border-[#6386FF33] shadow-custom-drop bg-white md:py-[50px] md:px-10 py-[10px] px-[10px] ">
        {faqsData.map((data) => {
          return <FaqItems data={data} key={data.id} />;
        })}
      </div>
    </div>
  );
};

export default FaqContent;
