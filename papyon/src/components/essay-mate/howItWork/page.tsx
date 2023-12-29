/* eslint-disable react/jsx-no-duplicate-props */
"use client";
import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import Image from "next/image";
import ArrowLeft from "./arrowLeft";
import ArrowRight from "./arrowRight";

SwiperCore.use([Navigation]);

const HowItWork = () => {
  const swiperRef = useRef<SwiperCore>(null);

  const handleNext = () => {
    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
      // eslint-disable-next-line no-param-reassign
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
      // eslint-disable-next-line no-param-reassign
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Create array with 500 slides
  //   const [slides, setSlides] = useState(
  //     Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  //   );

  return (
    <div className="container mx-auto">
      <div
        id="settingsWork"
        className=" w-full mt-[100px] md:mt-[173px] flex md:flex-row flex-col justify-center items-center space-x-[30px] overflow-x-hidden overflow-y-hidden"
      >
        <div className="md:w-1/3 w-full text-center md:text-left px-[32px] md:px-0 flex flex-col ">
          <h1 className="text-black font-semibold text-[40px] -tracking-3 leading-[49px] ">
            How it Work
          </h1>
          <p className="text-lg font-normal leading-8 text-black mt-[10px]">
            Follow link to download the app or find the app on app store with
            “Essaymate” brand. Follow path to create essay as you want.
          </p>
          <div className="mt-5 space-x-5 hidden md:block">
            <button
              onClick={handlePrev}
              className="group/left rounded-[50px] border py-[13px] px-[38px] border-[#6386FF33] border-opacity-20 bg-white "
            >
              <span className="group-hover/left:opacity-30">
                <ArrowLeft />
              </span>
            </button>
            <button
              onClick={handleNext}
              className="group/right rounded-[50px] border py-[13px] px-[38px] border-[#6386FF33] border-opacity-20 bg-white"
            >
              <span className="group-hover/right:opacity-30">
                <ArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div id="works" className="md:w-3/5 w-full max-h-96">
          <Swiper
            modules={[Virtual, Navigation, Pagination]}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            navigation={true}
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            ref={swiperRef}
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            initialSlide={1}
            virtual
          >
            <SwiperSlide>
              <div className="mt-[50px] px-[30px] ">
                {" "}
                <Image
                  src="/easy-mate/mobile1.svg"
                  width={24}
                  height={24}
                  alt="arrow"
                />
                <h1 className="mt-5 text-[20px] -tracking-3 leading-9 font-medium ">
                  Open the homepage <br /> of app
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-[50px] px-[30px] ">
                {" "}
                <Image
                  src="/easy-mate/mobile1.svg"
                  width={24}
                  height={24}
                  alt="arrow"
                />
                <h1 className="mt-5 text-[20px] -tracking-3 leading-9 font-medium ">
                  Get to Essay Writing Section
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-[50px] px-[30px] ">
                {" "}
                <Image
                  src="/easy-mate/mobile1.svg"
                  width={24}
                  height={24}
                  alt="arrow"
                />
                <h1 className="mt-5 text-[20px] -tracking-3 leading-9 font-medium ">
                  Make research based on the keyword, topic, PDF or URL if
                  needed.
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-[50px] px-[30px] ">
                {" "}
                <Image
                  src="/easy-mate/mobile1.svg"
                  width={24}
                  height={24}
                  alt="arrow"
                />
                <h1 className="mt-5 text-[20px] -tracking-3 leading-9 font-medium ">
                  Generate outline or jump into essay writing step.
                </h1>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="mt-[150px] w-full hidden md:flex justify-center ">
        <div className="w-[433px] flex justify-between items-center ">
          <div className="w-[160px] h-[1px] bg-[#96B8F8] "></div>
          <div>
            {" "}
            <Image
              src="/easy-mate/ball.svg"
              width={53}
              height={53}
              alt="arrow"
              id="rotate"
            />
          </div>
          <div className="w-[160px] h-[1px] bg-[#96B8F8] "></div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
