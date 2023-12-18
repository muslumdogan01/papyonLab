import Image from "next/image";
import React from "react";

const HeaderText = () => {
  return (
    <div className="w-full flex z-30">
      <div className="w-full flex flex-col justify-center lg:items-start items-center">
        <h5 className="text-base font-semibold leading-6 text-[#0A84FF] ">
          EssayMate
        </h5>
        <div className="flex flex-col mt-[10px] text-[50px] md:text-6xl leading-[70px] md:leading-[74px] font-semibold tracking-[-3px] text-center lg:text-left">
          <h1 className="text-black">AI Essay Writer:</h1>
          <h1 className="bg-clip-text bg-gradient-to-r from-[#D37AE9] to-[#7E36FC] text-transparent ">
            Write 5x Faster <br className="block md:hidden" /> Essays{" "}
            <span className="text-black">
              <br className="hidden md:block" /> Without{" "}
              <br className="block md:hidden" /> Plagiarism
            </span>
          </h1>
        </div>
        <div className="w-[333px] md:w-full mt-5">
          <p className="font-normal text-lg leading-8 text-center lg:text-left">
            The AI Essay Writer is an essay writing assistant designed to
            conduct research on essay topic, generate essays with varied tones
            and styles and edit the generated essays using a text editor. It
            ultimately allows users to export their essays as PDF or Word
            documents. This tool is ideal for college students and anyone who
            wants an AI bot to create essays.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center lg:justify-start items-center mt-10 lg:space-x-[10px]">
        <div className="flex">
        <Image src="/easy-mate/star.svg" width={21} height={21} alt="star" />
        <Image src="/easy-mate/star.svg" width={21} height={21} alt="star" />
        <Image src="/easy-mate/star.svg" width={21} height={21} alt="star" />
        <Image src="/easy-mate/star.svg" width={21} height={21} alt="star" />
        <Image src="/easy-mate/star2.svg" width={21} height={21} alt="star" />
        </div>
        <span className="text-lg font-semibold leading-8 text-[#00030F] mt-[10px] lg:mt-0 ">4.6 Stars (78.9k Ratings)</span>
        </div>
        <div className="flex w-full justify-center lg:justify-start items-center mt-10 space-x-[15px]">
        <Image src="/easy-mate/apple.svg" width={165} height={60} alt="star" />
        <Image src="/easy-mate/playstore.svg" width={165} height={60} alt="star" />
        </div>
      </div>
    </div>
  );
};

export default HeaderText;
