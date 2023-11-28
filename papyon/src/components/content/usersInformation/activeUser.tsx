"use client";
import { useCountUp } from "react-countup";

const ActiveUser = () => {
  useCountUp({
    ref: "active",
    end: 100,
    start: 0,
    separator: "",
    duration: 5,
  });
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex">
        <h1
          id="active"
          className="bg-clip-text bg-gradient-to-r  from-[#FFFFFF] to-[#C2C2C2] text-transparent md:text-[90px] font-semibold md:leading-[111px] md:tracking-[-3px] "
        >
          K+
        </h1>

        <span className="bg-clip-text bg-gradient-to-r  from-[#FFFFFF] to-[#C2C2C2] text-transparent md:text-[90px] font-semibold md:leading-[111px] md:tracking-[-3px]">
          K+
        </span>
      </div>
      <h5 className="font-normal md:text-xl md:leading-[34px] text-white">
        Active User
      </h5>
    </div>
  );
};

export default ActiveUser;
