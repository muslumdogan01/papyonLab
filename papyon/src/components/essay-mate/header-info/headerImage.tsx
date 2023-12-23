import Image from "next/image";
import React from "react";

const HeaderImage = () => {
  return (
    <div className="hidden lg:flex w-full justify-center ">
      <div className="w-[244px] h-[510px] relative">
        <Image
          src="/easy-mate/phone1.svg"
          width={244}
          height={510}
          alt="star"
          className="absolute top-[65px] left-[3rem] -z-20 rotate-[-4deg] xl:w-[244px] w-[180px]"
        />
      </div>
      <div className="w-[320px] h-[669px] relative">
        <Image
          src="/easy-mate/phone2.svg"
          width={320}
          height={669}
          alt="star"
          className="absolute top-0 left-0 -z-10 -rotate-[-5deg] xl:w-[320px] w-[250px] "
        />
      </div>
    </div>
  );
};

export default HeaderImage;
