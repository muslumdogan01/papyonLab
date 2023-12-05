"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Milestones from "../content/usersInformation/milestones";
import Typed from "typed.js";

const HeaderDescription = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Health", "Design", "Ai"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
      
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="flex justify-center flex-col items-center absolute top-[250px] left-0 w-full z-[60]">
        <div className="flex flex-col w-full justify-center items-center">
          <h1 className="w-full md:text-[90px] font-semibold md:tracking-[-3px] text-center text-white">
            We Make Mobile Apps{" "}
          </h1>
          <div className="flex w-full justify-center items-center space-x-4 pl-10">
            <h1 className="md:text-[90px] font-semibold md:tracking-[-3px] text-center text-white">
              in the Field of{" "}
            </h1>

            <h1>
              <span
                id="header-gradient"
                className="bg-clip-text bg-gradient-to-r  from-[#C583D4] to-[#96B8F8] text-transparent md:text-[90px] font-semibold py-1 px-8 md:tracking-[-3px] "
                ref={el}
              ></span>
            </h1>
          </div>
        </div>
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
        <Milestones />
      </div>
      <div className="flex justify-center items-center absolute top-28 left-0 w-full z-30">
        <Image
          src="/images/apple.png"
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
