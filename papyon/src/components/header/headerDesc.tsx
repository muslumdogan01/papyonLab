import Image from "next/image";
import React from "react";

const HeaderDescription = () => {
  return (
    <>
      <div className="flex justify-center items-center absolute top-52 left-0 w-full z-20">
        <span className="text-[90px] font-semibold tracking-tight text-center text-white">
          We Make Mobile Apps <br /> in the Field of
          <span className="text-[90px] font-semibold tracking-tight text-center text-white">Health</span>
        </span>

        
      </div>
      <div className="flex justify-center items-center absolute top-28 left-0 w-full ">
        <Image src="/images/iPhone.png" alt="dots" width={800} height={769} />
      </div>
    </>
  );
};

export default HeaderDescription;
