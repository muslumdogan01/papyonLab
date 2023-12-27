import React from "react";

const FaqHeader = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1 className="text-base font-semibold leading-6 text-[#1D9EBB] ">FAQ</h1>
      <h1 className="text-[40px] font-semibold leading-[49px] text-center mt-[10px] -tracking-3 text-black">
        Frequently Asked Questions
      </h1>
      <p className="font-normal text-lg leading-8 text-center text-black text-opacity-80 mt-[10px] ">
        Theres no limit to what you can do with Essay Mate. You can find
        answers <br /> to all the questions you have in mind.
      </p>
    </div>
  );
};

export default FaqHeader;
