import Image from "next/image";
import React from "react";

const Milestones = () => {
  return (
    <div className="w-full flex justify-center items-center z-[20] relative">
      <div className="w-full flex justify-center items-center absolute">
        <h1 className="mt-4 bg-clip-text bg-gradient-to-r  from-[#91E998] to-[#6366F7] text-transparent text-[60px] font-semibold leading-[74px] tracking-[-3px] ">
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
