import Image from "next/image";
import React from "react";

const AiInformation = () => {
  return (
    <div className="w-full  flex lg:flex-row justify-center flex-col items-center relative mt-5  md:space-x-4">
      <div className="relative md:w-full w-[358px] 2xl:w-[80%] bg-white shadow-xl rounded-[30px] md:border border-[#6386FF33] border-opacity-20">
        <Image
          src="/easy-mate/aiDots2.svg"
          layout="fill"
          objectFit="cover"
          alt="essay"
          className="absolute top-0  p-5 md:block hidden"
        />
        <div className="hidden lg:flex mt-[100px] ml-10 space-x-5 ">
          <span className="text-lg font-normal leading-8 text-[#1B48BB] border border-[#6386FF33] border-opacity-20 py-[14px] px-5 rounded-[20px] shadow-xl bg-white w-[250px] z-20">
            Output Language
          </span>
          <span className="text-lg font-normal leading-8 text-[#1B48BB] border border-[#6386FF33] border-opacity-20 py-[14px] px-5 rounded-[20px] shadow-xl bg-white w-[250px] z-20">
            Essay Format
          </span>
          <span className="bg-[#EFF3FF] rounded-l-[20px] w-[63px] h-[60px] 2xl:absolute 2xl:top-[100px] 2xl:right-0"></span>
          <Image
            src="/easy-mate/aiAreaIcon1.svg"
            width={21}
            height={45}
            alt="essay"
            className="absolute top-[124px] left-[-5px] z-20 "
          />
        </div>
        <div className="hidden lg:flex mt-6  space-x-5 relative">
          <span className="bg-[#EFF3FF] rounded-r-[20px] w-[63px] h-[60px]"></span>
          <Image
            src="/easy-mate/aiAreaIcon2.svg"
            width={22}
            height={45}
            alt="essay"
            className="absolute top-[-24px] right-[13px] z-20 "
          />
          <span className="text-lg font-normal leading-8 text-[#1B48BB] border border-[#6386FF33] border-opacity-20 py-[14px] px-5 rounded-[20px] shadow-xl bg-white w-[250px] ">
            Output Language
          </span>
          <span className="text-lg font-normal leading-8 text-[#1B48BB] border border-[#6386FF33] border-opacity-20 py-[14px] px-5 rounded-[20px] shadow-xl bg-white w-[250px] ">
            Essay Format
          </span>
        </div>
        <div className="flex flex-col  lg:pt-[100px] lg:pl-[70px] lg:pb-[50px] py-[50px] px-[22px] ">
          <h1 className="text-[40px] font-semibold leading-[49px] -tracking-3 text-black lg:text-left text-center z-40">
            Ai Original
            <br />
            Essay Creator
          </h1>
          <p className="text-lg leading-8 font-normal text-black lg:text-left text-center w-full xl:w-[462px] mt-[10px] lg:mt-[10px] text-opacity-80 z-40">
            Users can easily export their AI-created essays as PDF or Word
            documents with just one button. Before exporting, users can check
            for plagiarism to ensure the originality of the essay.
          </p>
        </div>
      </div>
      <div className="relative shadow-xl rounded-[30px] md:w-full w-[358px] 2xl:w-[80%] mt-5 lg:mt-0 md:border border-[#6386FF33] border-opacity-20   bg-white ">
      <div className="">
      <div className="hidden md:block ">
      <Image
          src="/easy-mate/aiDots2.svg"
          layout="fill"
          objectFit="cover"
          alt="essay"
          className="absolute top-0  p-5 md:block hidden"
        />
          

          <div className=" justify-center mt-[124px] xl:flex hidden z-20">
            <Image
              src="/easy-mate/aiAreaIcon3.svg"
              width={255}
              height={160}
              alt="essay"
              className="z-20 "
            />
          </div>
        </div>

        <div className="flex flex-col   lg:pl-[70px] lg:pb-[50px] py-[50px] px-[22px] ">
          <h1 className="text-[40px] font-semibold leading-[49px] -tracking-3 text-black lg:text-left text-center z-40">
            Ai Essay Export <br />
            (PDF or Word)
          </h1>
          <p className="text-lg leading-8 font-normal text-black lg:text-left text-center w-full xl:w-[462px] mt-[10px]  z-40">
            Users can easily export their AI-created essays as PDF or Word
            documents with just one button. Before exporting, users can check
            for plagiarism to ensure the originality of the essay.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AiInformation;
