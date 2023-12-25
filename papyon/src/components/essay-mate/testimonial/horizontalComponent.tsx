import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

const HorizontalComponent = () => {
  return (
    <div className="w-full">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        scrollbar={true}
      
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="w-[318px] shadow-xl rounded-[30px] border border-[#6386FF33] border-opacity-20 ">
            <div className="py-[50px] ">
            <div className="flex justify-center  ">
            <div className="w-4 h-4">
              <Image
                src="/easy-mate/star.svg"
                width={16}
                height={16}
                alt="star"
              />
            </div>
            <div className="w-4 h-4">
              <Image
                src="/easy-mate/star.svg"
                width={16}
                height={16}
                alt="star"
              />
            </div>
            <div className="w-4 h-4">
              <Image
                src="/easy-mate/star.svg"
                width={16}
                height={16}
                alt="star"
              />
            </div>
            <div className="w-4 h-4">
              <Image
                src="/easy-mate/star.svg"
                width={16}
                height={16}
                alt="star"
              />
            </div>
            <div className="w-4 h-4">
              <Image
                src="/easy-mate/star.svg"
                width={16}
                height={16}
                alt="star"
              />
            </div>
          </div>
          <div className="mt-[10px] px-[18px] ">
            <h1 className="font-semibold leading-6 text-base text-center">
              Lightning-Fast Essay Writing <br /> Made Easy!
            </h1>
            <p className="mt-[10px] font-normal text-sm leading-[22px] ">
              As a college student handing multiple essay homework, Ive tried
              some essay writing app, but EssayMate: AI Essay Writer app stands
              out for its 4x fast. The moment I input my requirements, the app
              generates a well-structured and coherent essay with my all input
              consideration.
            </p>
          </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="w-[318px] shadow-xl rounded-[30px] border border-[#6386FF33] border-opacity-20 ">
            <div className="py-[50px] ">
            <div className="flex justify-center  ">
            <div className="w-4 h-4">
              <Image
                src="/easy-mate/star.svg"
                width={16}
                height={16}
                alt="star"
              />
            </div>
            <div className="w-4 h-4">
              <Image
                src="/easy-mate/star.svg"
                width={16}
                height={16}
                alt="star"
              />
            </div>
            <div className="w-4 h-4">
              <Image
                src="/easy-mate/star.svg"
                width={16}
                height={16}
                alt="star"
              />
            </div>
            <div className="w-4 h-4">
              <Image
                src="/easy-mate/star.svg"
                width={16}
                height={16}
                alt="star"
              />
            </div>
            <div className="w-4 h-4">
              <Image
                src="/easy-mate/star.svg"
                width={16}
                height={16}
                alt="star"
              />
            </div>
          </div>
          <div className="mt-[10px] px-[18px] ">
            <h1 className="font-semibold leading-6 text-base text-center">
              Lightning-Fast Essay Writing <br /> Made Easy!
            </h1>
            <p className="mt-[10px] font-normal text-sm leading-[22px] ">
              As a college student handing multiple essay homework, Ive tried
              some essay writing app, but EssayMate: AI Essay Writer app stands
              out for its 4x fast. The moment I input my requirements, the app
              generates a well-structured and coherent essay with my all input
              consideration.
            </p>
          </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="w-[318px] shadow-xl rounded-[30px] border border-[#6386FF33] border-opacity-20 ">
            <div className="py-[50px] ">
            <div className="flex justify-center  ">
            <div className="w-4 h-4">
              <Image
                src="/easy-mate/star.svg"
                width={16}
                height={16}
                alt="star"
              />
            </div>
            <div className="w-4 h-4">
              <Image
                src="/easy-mate/star.svg"
                width={16}
                height={16}
                alt="star"
              />
            </div>
            <div className="w-4 h-4">
              <Image
                src="/easy-mate/star.svg"
                width={16}
                height={16}
                alt="star"
              />
            </div>
            <div className="w-4 h-4">
              <Image
                src="/easy-mate/star.svg"
                width={16}
                height={16}
                alt="star"
              />
            </div>
            <div className="w-4 h-4">
              <Image
                src="/easy-mate/star.svg"
                width={16}
                height={16}
                alt="star"
              />
            </div>
          </div>
          <div className="mt-[10px] px-[18px] ">
            <h1 className="font-semibold leading-6 text-base text-center">
              Lightning-Fast Essay Writing <br /> Made Easy!
            </h1>
            <p className="mt-[10px] font-normal text-sm leading-[22px] ">
              As a college student handing multiple essay homework, Ive tried
              some essay writing app, but EssayMate: AI Essay Writer app stands
              out for its 4x fast. The moment I input my requirements, the app
              generates a well-structured and coherent essay with my all input
              consideration.
            </p>
          </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="w-[318px] shadow-xl rounded-[30px] border border-[#6386FF33] border-opacity-20 ">
            <div className="py-[50px] ">
            <div className="flex justify-center  ">
            <div className="w-4 h-4">
              <Image
                src="/easy-mate/star.svg"
                width={16}
                height={16}
                alt="star"
              />
            </div>
            <div className="w-4 h-4">
              <Image
                src="/easy-mate/star.svg"
                width={16}
                height={16}
                alt="star"
              />
            </div>
            <div className="w-4 h-4">
              <Image
                src="/easy-mate/star.svg"
                width={16}
                height={16}
                alt="star"
              />
            </div>
            <div className="w-4 h-4">
              <Image
                src="/easy-mate/star.svg"
                width={16}
                height={16}
                alt="star"
              />
            </div>
            <div className="w-4 h-4">
              <Image
                src="/easy-mate/star.svg"
                width={16}
                height={16}
                alt="star"
              />
            </div>
          </div>
          <div className="mt-[10px] px-[18px] ">
            <h1 className="font-semibold leading-6 text-base text-center">
              Lightning-Fast Essay Writing <br /> Made Easy!
            </h1>
            <p className="mt-[10px] font-normal text-sm leading-[22px] ">
              As a college student handing multiple essay homework, Ive tried
              some essay writing app, but EssayMate: AI Essay Writer app stands
              out for its 4x fast. The moment I input my requirements, the app
              generates a well-structured and coherent essay with my all input
              consideration.
            </p>
          </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HorizontalComponent;
