import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DropdownProps {
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}
const MenuDropdown: React.FC<DropdownProps> = ({ setShowDropdown }) => {
  return (
    <div
      className="bg-white absolute top-[37px] ml-12 w-[500px] h-[320px]  rounded-[20px] z-[200]"
      onMouseLeave={() => {
        setShowDropdown(false);
      }}
    >
      <span className="w-5 h-5 rotate-[45deg] rounded-sm -z-10  bg-white absolute -top-1 left-[81px]"></span>
      <ul className="ml-5 pt-5 flex flex-wrap gap-x-2">
      <Link href="/essay-mate">
      <li className=" hover:bg-[#EDEDED] w-[230px] h-[70px] flex cursor-pointer p-[10px] rounded-[14px] transition duration-500 ease-in-out">
          <Image src="/footer/chatBot.svg" alt="girl" width={50} height={50} />
          <span className="flex flex-col ml-[10px] ">
            <span className="font-medium text-base  leading-6 text-[#00030F] ">
              EssayMate
            </span>
            <span className="text-[#00030F] font-semibold text-xs leading-5 text-opacity-70">
              Ai Essay Writer
            </span>
          </span>
        </li>
      </Link>
        <li className=" hover:bg-[#EDEDED] w-[230px] h-[70px] flex cursor-pointer p-[10px] rounded-[14px] transition duration-500 ease-in-out">
          <Image src="/footer/roosefy.svg" alt="girl" width={50} height={50} />
          <span className="flex flex-col ml-[10px] ">
            <span className="font-medium text-base  leading-6 text-[#00030F] ">
              Roosefy
            </span>
            <span className="text-[#00030F] font-semibold text-xs leading-5 text-opacity-70">
              Design App
            </span>
          </span>
        </li>
        <li className=" hover:bg-[#EDEDED] w-[230px] h-[70px] flex cursor-pointer p-[10px] rounded-[14px] transition duration-500 ease-in-out">
          <Image
            src="/footer/highlight.svg"
            alt="girl"
            width={50}
            height={50}
          />
          <span className="flex flex-col ml-[10px] ">
            <span className="font-medium text-base  leading-6 text-[#00030F] ">
              Naricon
            </span>
            <span className="text-[#00030F] font-semibold text-xs leading-5 text-opacity-70">
              Widget App
            </span>
          </span>
        </li>

        <li className=" hover:bg-[#EDEDED] w-[230px] h-[70px] flex cursor-pointer p-[10px] rounded-[14px] transition duration-500 ease-in-out">
          <Image src="/footer/bmi.svg" alt="girl" width={50} height={50} />
          <span className="flex flex-col ml-[10px] ">
            <span className="font-medium text-base  leading-6 text-[#00030F] ">
              BMI Buddy
            </span>
            <span className="text-[#00030F] font-semibold text-xs leading-5 text-opacity-70">
              Health
            </span>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default MenuDropdown;
