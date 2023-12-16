"use client";
import Information from "@/components/about/information";
import Profiles from "@/components/about/teams/profiles";
import TeamsHeader from "@/components/about/teams/teamsHeader";
import AppInformation from "@/components/content/appInformation/page";
import AppsContent from "@/components/content/ourApps/appsContent/appsContent";
import AppsHeader from "@/components/content/ourApps/appsHeader";
import Header from "@/components/header/page";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full bg-[#00030f] overflow-hidden 2xl:overflow-y-scroll 2xl:h-screen ">
      <div className="2xl:container mx-auto">
        <div id="bg-image-1"></div>
        <div id="bg-image-2"></div>
        <div className="z-10 relative ">
          <Header />
          <div className="lg:my-[200px] mt-[200px] md:mt-0 mb-[100px] md:mb-0 flex flex-col  justify-center items-center z-50 ">
            <h1 className="bg-clip-text bg-gradient-to-r from-[#FBCD47] to-[#F591CF] text-transparent text-center text-[70px] font-semibold leading-[86px] tracking-[-3px]">
              About Us
            </h1>
            <h5 className="text-center w-[345px] md:w-full text-[40px] text-[#FFFFFF99] text-opacity-60 text-base font-normal leading-[26px] mt-5">
              Papyon Lab is a laboratory develops b2c applications focused on{" "}
              <br className="md:block hidden" />
              usability in every area that the user touches.
            </h5>
          </div>

          <Image
            src="/images/aboutHeader.png"
            alt="about"
            width={400}
            height={300}
            className="absolute md:w-60 lg:w-72 xl:w-[400px]  top-[250px] xl:left-[250px] lg:left-[220px] left-[100px] 2xl:left-[320px] md:flex hidden opacity-60 "
          />
          <Image
            src="/images/aboutHeader2.png"
            alt="about"
            width={400}
            height={300}
            className="absolute md:w-60 lg:w-72 xl:w-[400px] top-[374px] 2xl:top-[410px] xl:left-[-39px] 2xl:left-[0] left-[0]  md:flex hidden opacity-80 z-10"
          />
          <Image
            src="/images/aboutHeader4.png"
            alt="about"
            width={400}
            height={300}
            className="absolute md:w-60 lg:w-72 xl:w-[400px] xl:top-[600px] md:top-[500px] xl:left-[330px] lg:left-[250px] left-[130px] z-0 md:flex hidden opacity-50"
          />
          <Image
            src="/images/aboutHeader5.png"
            alt="about"
            width={400}
            height={300}
            className="absolute md:w-60 lg:w-72 xl:w-[400px] top-[304px] xl:right-[250px] 2xl:right-[300px] right-[100px]  lg:right-[200px] md:flex hidden opacity-40"
          />
          <Image
            src="/images/aboutHeader3.png"
            alt="about"
            width={400}
            height={300}
            className="absolute md:w-60 lg:w-72 xl:w-[400px] xl:top-[582px] top-[480px] -z-0 xl:right-[0] right-[-38px] md:flex hidden opacity-80"
          />

          <div className="">
            <div className="z-50 xl:pt-40 ">
              <Information />
            </div>
            <div className="relative my-40">
              <TeamsHeader />
            </div>
            <div>
              <Profiles />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
