import Header from "@/components/header/page";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <Header />
      <div className="h-24 md:h-0"></div>
      <div className="h-full w-full flex flex-col bg-red-300">
        <div className="bg-red-500">selam13333</div>
        <div className="bg-red-500">selam1</div>
        <div className="bg-red-500">selam1</div>
        <div className="bg-red-500">selam1</div>
      </div>
    </>
  );
};

export default About;
