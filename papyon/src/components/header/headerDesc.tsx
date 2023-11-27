import Image from "next/image";
import React from "react";
import Milestones from "../content/usersInformation/milestones";

const HeaderDescription = () => {
  return (
    <>
      <div className="flex justify-center flex-col items-center absolute top-[250px] left-0 w-full z-[60]">
        <span className="text-[90px] font-semibold tracking-[-3px] text-center text-white">
          We Make Mobile Apps <br /> in the Field of
          <span id="header-gradient" className=" text-center ml-[15px] ">
            <span className="bg-clip-text bg-gradient-to-r  from-[#C583D4] to-[#96B8F8] text-transparent text-[90px] font-semibold py-1 px-8 tracking-[-3px] ">
              Health
            </span>
          </span>
        </span>
        <p className="z-[60] text-white font-normal text-xl text-opacity-60 text-center leading-[34px] mt-7">
          Papyon Lab is a laboratory develops b2c applications focused on <br />
          usability in every area that the user touches.
        </p>
        <div id="line-container" className="z-[60]">
          <div
            id="line"
            className="z-[60] bg-gradient-to-b from-[#00D1FF00] to-[#00D1FF]"
          ></div>
        </div>
          <Milestones/>
      </div>
      <div className="flex justify-center items-center absolute top-28 left-0 w-full z-30">
        <Image
          src="/images/iPhone.png"
          alt="phone"
          width={850}
          height={769}
          className="border-none outline-none ring-0"
        />
      </div>
    </>
  );
};

export default HeaderDescription;
