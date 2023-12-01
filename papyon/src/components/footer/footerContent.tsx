"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const FooterContent = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-11">
      <div className="w-[380px] flex ">
        <Image src="/footer/girl.svg" alt="girl" width={80} height={80} />
      </div>
      <div className="w-full justify-center items-center flex ">
        <Image src="/footer/roosefy.svg" alt="girl" width={80} height={80} />
        <Image
          src="/footer/qr.svg"
          alt="girl"
          width={80}
          height={80}
          className="ml-3"
        />
        <Image
          src="/footer/bmi.svg"
          alt="girl"
          width={90}
          height={90}
          className=" -rotate-2"
        />
        <Image
          src="/footer/artGenerator.svg"
          alt="girl"
          width={80}
          height={80}
          className="ml-3"
        />
        <Image
          src="/footer/storyCover.svg"
          alt="girl"
          width={80}
          height={80}
          className="ml-5"
        />
        <Image
          src="/footer/highlight.svg"
          alt="girl"
          width={90}
          height={90}
          className=" rotate-[-5deg]"
        />
        <Image
          src="/footer/chatBot.svg"
          alt="girl"
          width={80}
          height={80}
          className="ml-0.5"
        />
      </div>
    </div>
  );
};

export default FooterContent;
