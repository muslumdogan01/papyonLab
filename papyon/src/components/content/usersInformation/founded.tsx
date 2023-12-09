"use client";
import { useCountUp } from "react-countup";

const Founded = () => {
  useCountUp({
    ref: "founded",
    end: 2022,
    start: 0,
    separator: "",
    duration: 5,
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <h1
        id="founded"
        className="bg-clip-text bg-gradient-to-r  from-[#FFFFFF] to-[#C2C2C2] text-transparent md:text-[90px] font-semibold md:leading-[111px] leading-[86px] text-[70px] tracking-[-3px] "
      ></h1>
      <h5 className="font-normal text-xl leading-[34px] text-white">
        Founded
      </h5>
    </div>
  );
};

export default Founded;
