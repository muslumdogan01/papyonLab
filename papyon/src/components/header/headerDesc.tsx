import Image from "next/image";
import React from "react";

const HeaderDescription = () => {
  return (
    <>
      <div className="flex justify-center items-center absolute top-52 left-0 w-full z-[60]">
        <span className="text-[90px] font-semibold tracking-[-3px] text-center text-white">
          We Make Mobile Apps <br /> in the Field of
          <span id="header-gradient" className=" text-center ">
            <span className="text-[#C583D4] text-[90px] font-semibold py-1 px-8 tracking-[-3px] ">Health</span>
          </span>

        </span>
      </div>
      <div className="flex justify-center items-center absolute top-28 left-0 w-full z-30">
        <Image
          src="/images/iPhone.png"
          alt="phone"
          width={800}
          height={769}
          className="border-none outline-none ring-0"
        />
      </div>
    </>
  );
};

export default HeaderDescription;
