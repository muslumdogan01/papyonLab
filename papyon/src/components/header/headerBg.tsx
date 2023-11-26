import Image from "next/image";
import React from "react";

const HeaderBackground = () => {
  return (
    <>
      <div className="absolute top-0 left-0 text-white z-50 w-full h-full">
        <Image
          src="/images/Dots.png"
          alt="dots"
          sizes="100%"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-40 w-full h-full">
        <Image
          src="/images/gradient.png"
          alt="dots"
          sizes="100%"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </>
  );
};

export default HeaderBackground;
