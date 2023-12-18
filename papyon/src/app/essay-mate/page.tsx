import HeaderInfo from "@/components/essay-mate/header-info/page";
import Header from "@/components/essay-mate/header/page";
import Image from "next/image";
import React from "react";

const EssayMate = () => {
  return (
    <div
      id="easy-gradient"
      className="flex min-h-screen flex-col w-full relative "
    >
      <Image src="/easy-mate/bgHomeGradient.svg" layout="fill" objectFit="cover" alt="selam" className="absolute top-0 left-0 z-20 " />
      <Image src="/easy-mate/dots.svg" layout="fill" objectFit="cover" alt="selam" className="absolute top-0 left-0 z-10 hidden md:block" />
      <Image src="/easy-mate/mobileDots.svg" layout="fill" objectFit="cover" alt="selam" className="absolute top-0 left-0 z-10 block md:hidden" />
      <div className="container mx-auto">
        <Header/>
        <HeaderInfo/>
      </div>
    </div>
  );
};

export default EssayMate;
