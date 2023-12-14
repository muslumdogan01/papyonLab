import Image from "next/image";
import React from "react";

const Milestones = () => {
  return (
    <div id="samsung" className="w-full flex justify-center items-center z-[20] mt-24 md:mt-0 relative">
      <div className="w-full flex justify-center items-center absolute">
        <h1 className="mt-4 bg-clip-text bg-gradient-to-r  from-[#91E998] to-[#6366F7] text-transparent md:text-[60px] text-[50px] font-semibold md:leading-[74px] leading-[62px] tracking-[-3px] ">
          Milestones
        </h1>
      </div>
      
      <Image
        src="/images/milestones.png"
        alt="Milestones"
        width={1250}
        height={372}
      />
    </div>
  );
};

export default Milestones;
