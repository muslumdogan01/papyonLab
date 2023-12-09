"use client";
import { useCountUp } from "react-countup";

const AppDownloads = () => {
  useCountUp({
    ref: "downloads",
    end: 750,
    start: 0,
    separator: "",
    duration: 5,
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex">
        <h1
          id="downloads"
          className="bg-clip-text bg-gradient-to-r  from-[#FFFFFF] to-[#C2C2C2] text-transparent md:text-[90px] font-semibold md:leading-[111px] tracking-[-3px] leading-[86px] text-[70px]"
        ></h1>
        <span className="bg-clip-text bg-gradient-to-r  from-[#FFFFFF] to-[#C2C2C2] text-transparent md:text-[90px] font-semibold md:leading-[111px] tracking-[-3px] leading-[86px] text-[70px]">
          K+
        </span>
      </div>
      <h5 className="font-normal md:text-xl md:leading-[34px] text-white">
        App Downloads
      </h5>
    </div>
  );
};

export default AppDownloads;
