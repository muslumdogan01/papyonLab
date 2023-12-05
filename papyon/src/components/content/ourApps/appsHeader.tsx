import Image from "next/image";
import React from "react";

const AppsHeader = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col mt-96 md:mt-0 relative w-full justify-center items-center z-40">
        <Image
          src="/images/ourApps.png"
          alt="ourApps"
          width={1295}
          height={372}
          className="flex"
        />

        <Image
          src="/ourAppsDots1.svg"
          alt="ourApps"
          width={250}
          height={74}
          className="absolute lg:top-[20px] xl:top-[40px] lg:left-[195px] xl:left-[330px] 2xl:left-[450px]"
        />

        <Image
          src="/ourAppsDots2.svg"
          alt="ourApps"
          width={250}
          height={74}
          className="absolute lg:top-[110px] xl:top-[130px] lg:right-[180px] xl:right-[316px] 2xl:right-[440px]"
        />

        <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <h1 className="bg-clip-text bg-gradient-to-r from-[#FBCD47]  to-[#F591CF] text-transparent font-semibold text-2xl md:text-6xl md:leading-[74px] md:tracking-[-3px]">
            Our Apps
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AppsHeader;
