import React from "react";
import Image from "next/image";
const AppInformation = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-44 flex w-full justify-center items-center mb-32">
        <div className="relative border-none outline-none ring-0">
          <Image
            src="/appInformation.svg"
            alt="Logo"
            width={1200}
            height={500}
            className=" bg-gradient-to-b rounded-[50px] from-[#21C1F333] to-[#00030F00] -z-10"
          />
          <Image
            src="/informationLine.svg"
            alt="informationLine"
            width={1200}
            height={1}
            className="absolute top-0 z-0 left-0"
          />

          <Image
            src="/playStore.svg"
            alt="playStore"
            width={120}
            height={120}
            className="absolute top-[31px] -rotate-[15deg] left-20"
          />
          <Image
            src="/appleStore.svg"
            alt="playStore"
            width={120}
            height={120}
            className="absolute top-[76px] -rotate-[-15deg] left-[171px]"
          />
          <div className="absolute left-[100px] top-[170px] right-[58px] flex ">
            <div className="flex w-full flex-col lg:flex-row ">
              <div className="flex flex-col w-full lg:w-1/2">
                <h1 className="lg:text-[40px] text-2xl bg-clip-text bg-gradient-to-r from-[#C583D4] to-[#96B8F8] text-transparent font-semibold lg:leading-[49px] lg:tracking-[-3px]">
                  Our mobile new world. <br /> We do fun things in <br /> this
                  world
                </h1>
              </div>
              <div className="flex flex-col w-full lg:w-1/2">
                <span className="font-normal lg:text-xl lg:leading-[34px] bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#C2C2C2] text-transparent ">
                  At Papyonlab, we leave our mark on the digital world by
                  creating mobile applications that make a difference. Our
                  applications, available on the App Store and Play Store, stand
                  out with the innovative blend of our creative team s ingenuity
                  and hard work.
                  <br />
                  <br />
                  The applications we ve developed have been embraced by users
                  in many countries, providing us with the opportunity to make a
                  global impact. We started with a startup spirit, but our goal
                  is to grow and surpass boundaries.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppInformation;
