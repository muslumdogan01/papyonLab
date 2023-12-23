import Image from "next/image";
import React from "react";
import FeatureArea from "./featureArea";
import TextArea from "./textArea";

const Research = () => {
  return (
    <div className="md:bg-white w-full mt-28 flex flex-row justify-center items-center relative md:shadow-xl md:border border-[#6386FF33] border-opacity-20 rounded-[30px]">
      <Image
        src="/easy-mate/researchDots.svg"
        layout="fill"
        objectFit="cover"
        alt="essay"
        className="absolute top-0 left-0 p-5 md:block hidden"
      />
      <div className=" w-full hidden lg:block ">
        <div className="py-[151px] xl:px-[140px] px-[60px]">
          <FeatureArea />
        </div>
      </div>
      <div className="w-[358px] md:border-none border border-opacity-20 border-[#6386FF33] md:w-full py-[50px] px-[16px] lg:px-0 lg:py-0 rounded-[30px] bg-white shadow-xl md:shadow-none">
      <TextArea/>
      </div>
    </div>
  );
};

export default Research;
