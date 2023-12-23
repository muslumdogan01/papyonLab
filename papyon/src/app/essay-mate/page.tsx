import Editor from "@/components/essay-mate/aiEditor/page";
import AiInformation from "@/components/essay-mate/aiInformation/page";
import HeaderInfo from "@/components/essay-mate/header-info/page";
import Header from "@/components/essay-mate/header/page";
import Research from "@/components/essay-mate/research/page";
import Testimonial from "@/components/essay-mate/testimonial/page";
import Image from "next/image";
import React from "react";

const EssayMate = () => {
  return (
    <div
      id="easy-gradient"
      className="flex min-h-screen flex-col w-full relative "
    >
      <Image src="/easy-mate/bgHomeGradient.svg" layout="fill" objectFit="cover" alt="selam" className="absolute top-0 left-0 -z-50 " />
      <Image src="/easy-mate/dots.svg" layout="fill" objectFit="cover" alt="selam" className="absolute top-0 left-0 -z-40 hidden md:block" />
      <Image src="/easy-mate/mobileDots.svg" layout="fill" objectFit="cover" alt="selam" className="absolute top-0 left-0 z-0 block md:hidden" />
      <div className="container mx-auto">
        <Header/>
        <HeaderInfo/>
        <Research/>
        <AiInformation/>
        <Editor/>
        <Testimonial/>
      </div>
    </div>
  );
};

export default EssayMate;
