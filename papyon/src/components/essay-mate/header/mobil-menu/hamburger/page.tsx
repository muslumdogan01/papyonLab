import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import config from "./config";

interface SVGComponentProps {
  isOpenMenu: boolean;
  toggleMenu: () => void;
}

const Hamburger: React.FC<SVGComponentProps> = ({ isOpenMenu, toggleMenu }) => {
  const { container, lines, animations } = config;

  return (
    <div className="pb-[7px] pt-[14px] rounded-[10px] bg-[#E1E1E11F] bg-opacity-10 border border-opacity-10 border-white px-3">
      <motion.div
        className=""
        style={{ width: container.size, height: container.size }}
        onClick={toggleMenu}
        variants={animations.container}
        initial="initial"
        animate="animate"
      >
        {animations.lines.map((_, index) => (
          <motion.div
            key={index}
            className="-mb-[7px]  bg-white text-white"
            style={{ height: lines.size }}
            variants={animations.lines[index]}
            initial="initial"
            animate={isOpenMenu ? "opened" : "initial"}
          />
        ))}
      </motion.div>
      {/* {isOpenMenu ? (
        <button onClick={toggleMenu}>
          <Image
            src="/hamburgerClose.svg"
            alt="hamburger"
            width={38}
            height={40}
          />
        </button>
      ) : (
        <button onClick={toggleMenu}>
          <Image
            src="/hamburgerOpen.svg"
            alt="hamburger"
            width={38}
            height={40}
          />
        </button>
      )} */}
    </div>
  );
};

export default Hamburger;
