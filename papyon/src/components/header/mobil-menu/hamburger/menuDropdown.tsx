import Link from "next/link";
import React from "react";


const MenuDropdown = () => {
  return (
    <div className="w-full transition duration-300 ease-in-out">
      <ul className="flex flex-col space-y-[10px] ">
        <li className=" bg-white bg-opacity-10 py-[15px] rounded-[10px] mx-5 px-5 text-[30px] leading-9 tracking-[-3px] text-white">
        <Link href="/essay-mate">Essay Mate</Link>
        </li>
        <li className=" bg-white bg-opacity-10 py-[15px] rounded-[10px] mx-5 px-5 text-[30px] leading-9 tracking-[-3px] text-white">
        <Link href="/essay-mate">Roosefy</Link>
        </li>
        <li className=" bg-white bg-opacity-10 py-[15px] rounded-[10px] mx-5 px-5 text-[30px] leading-9 tracking-[-3px] text-white">
        <Link href="/essay-mate">Oria</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuDropdown;
