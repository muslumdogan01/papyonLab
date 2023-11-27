import React from "react";
import Image from "next/image";
const AppInformation = () => {
  return (
    <div className="mt-44 flex w-full justify-center items-center">
      <div className="">
        <div className="relative">
          <Image
            src="/appInformation.svg"
            alt="Logo"
            width={1200}
            height={500}
            className="bg-clip-border bg-gradient-radial rounded-[50px] from-[#21C1F333] to-[#00030F00] "
          />
          <Image
            src="/informationLine.svg"
            alt="informationLine"
            width={1200}
            height={1}
            className="absolute top-0  left-0"
          />
          <Image
            src="/playStore.svg"
            alt="playStore"
            width={300}
            height={300}
            className="absolute top-0 left-0"
          />
        </div>
      </div>
    </div>
  );
};

export default AppInformation;
