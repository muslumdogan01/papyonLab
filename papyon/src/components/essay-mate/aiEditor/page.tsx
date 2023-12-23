import Image from "next/image";
import React from "react";

import TextArea from "./textArea";

const Editor = () => {
  return (
    <div className="w-full justify-center items-center flex">
          <div className="bg-white md:w-full w-[358px] mt-[30px] flex flex-row justify-center items-center relative shadow-xl md:border border-[#6386FF33] border-opacity-20 rounded-[30px]">
      <Image
        src="/easy-mate/aiEditorDots.svg"
        layout="fill"
        objectFit="cover"
        alt="essay"
        className="absolute top-0 left-0 p-5 md:block hidden"
      />
      <div className="w-full flex  md:py-[135px] ">   
       <div className="w-full flex justify-center items-center"> <TextArea/> </div>   
      <div className="md:flex hidden justify-center items-center md:border-none border border-opacity-20 border-[#6386FF33] w-full rounded-[30px] relative shadow-xl md:shadow-none">
      
      <div className="w-[337px] h-[320px] relative">
      
      <Image
        src="/easy-mate/aiEditorText1.svg"
       width={397}
       height={100}
        alt="essay"
        className="absolute top-0 left-0 md:block hidden z-20"
      />
      </div>
      
      </div>
      </div>
    </div>
    </div>
  );
};

export default Editor;
