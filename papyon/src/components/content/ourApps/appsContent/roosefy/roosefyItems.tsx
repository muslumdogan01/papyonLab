import Image from "next/image";
import React from "react";

const RoosefyItems = () => {
  return (
    <div className="px-[60px] pt-[32px] flex flex-col justify-center items-center w-full overflow-hidden">
      <div className="relative w-full min-h-screen overflow-hidden rounded-tl-[30px] ">
        <Image
          src="/images/test.png"
          alt="test"
          width={280}
          height={280}
          objectFit="contain"
          className="absolute top-0 left-0 "
        />
      </div>
    </div>
  );
};

export default RoosefyItems;


//border-[10px] border-black opacity-30 rounded-tr-[30px] 