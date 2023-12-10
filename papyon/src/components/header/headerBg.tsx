import Image from "next/image";
import React from "react";

const HeaderBackground = () => {
  return (
    <>
      <div className="absolute top-0 left-0  z-50 w-full h-full md:block hidden">
        <Image
          src="/images/Dots.png"
          alt="dots"
          sizes="100%"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="absolute top-0 left-0 z-40 w-full h-full md:block hidden">
        <Image
          src="/images/gradient.png"
          alt="gradient"
          sizes="100%"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="absolute top-0 left-0  w-full h-full block md:hidden">
        <Image
          src="/mobileGradient.svg"
          alt="gradient"
          width={800}
          height={800}
          objectFit="contain"
          className=""
        />
      </div>
    </>
  );
};

export default HeaderBackground;
