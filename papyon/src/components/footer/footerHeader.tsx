"use client";
import Image from "next/image";

const FooterHeader = () => {
  return (
    <div className="min-h-[590px] flex flex-col justify-center items-center w-full relative z-0">
      <Image
        src="/union.svg"
        alt="union "
        width={793}
        height={595}
        className="top-0 left-1/2 transform -translate-x-1/2 z-10 absolute"
      />
      <h5 className="font-normal text-xl leading-[34px] text-white opacity-60 ">
        Let’s build together
      </h5>
      <h1 className="font-semibold text-6xl leading-[74px] tracking-[-3px] bg-clip-text bg-gradient-to-r from-[#D37AE9] to-[#7E36FC] text-transparent ">
        Let’s talk about your app!
      </h1>

      <div className="w-full h-full flex justify-center items-center">
        <button id="contact-us" onClick={()=>{alert('selam')}}>
          <span className="font-normal text-[26px] leading-[40px] pb-5 text-white">
            Contact us
          </span>
        </button>
      </div>
    </div>
  );
};

export default FooterHeader;
