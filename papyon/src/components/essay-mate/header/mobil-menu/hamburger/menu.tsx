import Link from "next/link";
import React, { useState } from "react";
import MenuDropdown from "./menuDropdown";
import Image from "next/image";

interface MenuLinkComponentProps {
  isOpenMenu: boolean;
}

const MenuLinkComponent: React.FC<MenuLinkComponentProps> = ({
  isOpenMenu,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropIcon, setShowDropIcon] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <nav
      className={`${
        isOpenMenu
          ? "block transition duration-500 ease-in-out"
          : "hidden transition duration-500 ease-in-out"
      } w-full h-screen bg-[#00030F] absolute top-[92px] transition duration-500 ease-in-out left-0`}
    >
      <ul className="flex flex-col ">
        <li className="border border-white border-opacity-10 py-[30px] px-5 text-[30px] leading-9 tracking-[-3px] text-white">
          <Link href="/about"> About Us</Link>
        </li>
        <li
          onClick={toggleDropdown}
          className="border-b w-full flex justify-between items-center border-white border-opacity-10 py-[30px] px-5 text-[30px] leading-9 tracking-[-3px] text-white transition duration-300 ease-in-out"
        >
          <span>Papyon Apps</span>
          {!showDropdown ? (
            <span>
              <Image src="/arrowDown.svg" width={24} height={24} alt="icon" />
            </span>
          ) : (
            <span>
              <Image src="/arrowUp.svg" width={24} height={24} alt="icon" />
            </span>
          )}
        </li>

        {showDropdown && <MenuDropdown />}

        <li className="border-b  border-white border-opacity-10 py-[30px] px-5 text-[30px] leading-9 tracking-[-3px] text-white">
          <Link href="/blog"> Papyon Blog</Link>
        </li>
        <li className="border-b border-white border-opacity-10 py-[30px] px-5 text-[30px] leading-9 tracking-[-3px] text-white">
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuLinkComponent;
