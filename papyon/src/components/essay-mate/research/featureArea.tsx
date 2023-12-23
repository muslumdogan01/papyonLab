import Image from "next/image";
import React from "react";

const FeatureArea = () => {
  return (
    <>
      <div className="flex justify-center items-center  space-x-5 ">
        <div className="flex flex-col px-[14px] py-5 w-[179px] bg-white z-20 border rounded-[20px] border-[#6386FF33] border-opacity-20 shadow-xl">
          <Image
            src="/easy-mate/researchIcon1.svg"
            width={26}
            height={26}
            alt="essay"
          />
          <span className="text-base font-bold leading-6 tracking-normal text-black mt-[10px]">
            Essay Ai
          </span>
          <p className="text-sm leading-5 font-medium  tracking-normal mt-[4px] text-opacity-70">
            Write engaging and interesting tweets. Go viral
          </p>
        </div>
        <div className="flex flex-col px-[14px] py-5 w-[179px] bg-white z-20 border rounded-[20px] border-[#6386FF33] border-opacity-20 shadow-xl">
          <Image
            src="/easy-mate/researchIcon2.svg"
            width={26}
            height={26}
            alt="essay"
          />
          <span className="text-base font-bold leading-6 tracking-normal text-black mt-[10px]">
            Essay Outline
          </span>
          <p className="text-sm leading-5 font-medium  tracking-normal mt-[4px] text-opacity-70">
            Write engaging and interesting tweets. Go viral
          </p>
        </div>
        <div className="w-[106px] h-[164px] border rounded-[20px] border-[#6386FF33] border-opacity-20 shadow-xl z-20"></div>
      </div>
      <div className="flex justify-center items-center  space-x-5 mt-5">
      <div className="w-[106px] h-[164px] border rounded-[20px] border-[#6386FF33] border-opacity-20 shadow-xl z-20"></div>
        <div className="flex flex-col px-[14px] py-5 w-[179px] bg-white z-20 border rounded-[20px] border-[#6386FF33] border-opacity-20 shadow-xl">
          <Image
            src="/easy-mate/researchIcon3.svg"
            width={26}
            height={26}
            alt="essay"
          />
          <span className="text-base font-bold leading-6 tracking-normal text-black mt-[10px]">
          Summarize Web
          </span>
          <p className="text-sm leading-5 font-medium  tracking-normal mt-[4px] text-opacity-70">
            Write engaging and interesting tweets. Go viral
          </p>
        </div>
        <div className="flex flex-col px-[14px] py-5 w-[179px] bg-white z-20 border rounded-[20px] border-[#6386FF33] border-opacity-20 shadow-xl">
          <Image
            src="/easy-mate/researchIcon4.svg"
            width={26}
            height={26}
            alt="essay"
          />
          <span className="text-base font-bold leading-6 tracking-normal text-black mt-[10px]">
          Summarize PDF
          </span>
          <p className="text-sm leading-5 font-medium  tracking-normal mt-[4px] text-opacity-70 z-20">
            Write engaging and interesting tweets. Go viral
          </p>
        </div>
   
      </div>
    </>
  );
};

export default FeatureArea;
