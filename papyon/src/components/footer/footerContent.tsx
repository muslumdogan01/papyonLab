"use client";
import Image from "next/image";
import React, {useEffect} from "react";
import { UseScrollPosition } from "../scroll/UseScrollPosition";
import { useViewportScroll } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';

interface ExampleProps {
  buttonRef: Ref<HTMLButtonElement>
}

const FooterContent = () => {
  const scrollPosition = UseScrollPosition();
  const controls = useAnimation();
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    let repeatCount = 0;

    const handleScroll = () => {
      if (scrollY.current > 200 && repeatCount < 3) { // Belirli bir scroll konumunda ve belirli bir sayıda tekrar etme şartı
        controls.start({
          y: [0, -20, 0],
          transition: { duration: 0.6, repeat: 2, repeatType: 'mirror' }, // 3 kez tekrar et ve dur
        });
        repeatCount++;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls, scrollY]);
  function classNames(
    ...classes: (string | undefined | null | false | 0)[]
  ): string {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="w-full flex flex-col justify-center items-center mt-11">
    
        <div className="w-[380px] flex ">
          <Image src="/footer/girl.svg" alt="girl" width={80} height={80} />
        </div>
        <div className="w-full justify-center items-center flex ">
          <Image
            src="/footer/roosefy.svg"
            alt="girl"
            width={80}
            height={80}
          />
          <Image
            src="/footer/qr.svg"
            alt="girl"
            width={80}
            height={80}
            className="ml-3"
          />
          <Image
            src="/footer/bmi.svg"
            alt="girl"
            width={90}
            height={90}
            className=" -rotate-2"
          />
          <Image
            src="/footer/artGenerator.svg"
            alt="girl"
            width={80}
            height={80}
            className="ml-3"
          />
          <Image
            src="/footer/storyCover.svg"
            alt="girl"
            width={80}
            height={80}
            className="ml-5"
          />
          <Image
            src="/footer/highlight.svg"
            alt="girl"
            width={90}
            height={90}
            className=" rotate-[-5deg]"
          />
          <Image
            src="/footer/chatBot.svg"
            alt="girl"
            width={80}
            height={80}
            className="ml-0.5"
          />
        </div>
      
    </div>
  );
};

export default FooterContent;
