"use client";
import AppInformation from "@/components/content/appInformation/page";
import Header from "@/components/header/page";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full bg-[#00030f] overflow-hidden 2xl:overflow-y-scroll 2xl:h-screen">
      <div id="bg-image-1"></div>
      <div id="bg-image-2"></div>
      <div className="z-10 relative">
        <Header />
        <div className="my-[200px]  flex flex-col  justify-center items-center z-50 ">
          <h1 className="bg-clip-text bg-gradient-to-r from-[#FBCD47] to-[#F591CF] text-transparent text-center text-[70px] font-semibold leading-[86px] tracking-[-3px]">
            About Us
          </h1>
          <h5 className="text-center text-[40px] text-[#FFFFFF99] text-opacity-60 text-base font-normal leading-[26px] ">
            Papyon Lab is a laboratory develops b2c applications focused on
            usability in every area that the user touches.
          </h5>
        </div>

        
          <Image
            src="/images/aboutHeader.png"
            alt="about"
            width={400}
            height={300}
            className="absolute md:w-60 xl:w-[400px] top-[250px] xl:left-[250px] left-[100px] md:flex hidden opacity-60 "
          />
          <Image
            src="/images/aboutHeader2.png"
            alt="about"
            width={400}
            height={300}
            className="absolute md:w-60 xl:w-[400px] top-[374px] xl:left-[-39px] left-[-39px]  md:flex hidden opacity-80 z-10"
          />
          <Image
            src="/images/aboutHeader4.png"
            alt="about"
            width={400}
            height={300}
            className="absolute md:w-60 xl:w-[400px] top-[646px] xl:left-[330px] left-[130px] z-0 md:flex hidden opacity-80"
          />
          <Image
            src="/images/aboutHeader5.png"
            alt="about"
            width={400}
            height={300}
            className="absolute md:w-60 xl:w-[400px] top-[304px] xl:right-[250px] right-[100px] md:flex hidden opacity-80"
          />
          <Image
            src="/images/aboutHeader3.png"
            alt="about"
            width={400}
            height={300}
            className="absolute md:w-60 xl:w-[400px] xl:top-[582px] top-[480px] z-10 xl:right-[0] right-[-38px] md:flex hidden opacity-80"
          />
   
        

        <div className="pt-28">
      <AppInformation/>
        </div>
      </div>
    </div>
  );
};

export default About;
