"use client";
import React, { useState, useEffect } from "react";

const AppDownloads = () => {
  const [count, setCount] = useState(0);
  const [reached, setReached] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const activeUserElement = document.getElementById("appDownloads");
      if (activeUserElement) {
        const scrollPosition = window.scrollY;
        const targetOffset = activeUserElement.offsetTop;
        const windowHeight = window.innerHeight;

        if (scrollPosition + windowHeight >= targetOffset && !reached) {
          setReached(true);
          let currentCount = 0;
          const interval = setInterval(() => {
            if (currentCount < 375 * 4) {
              setCount((prevCount) => {
                currentCount += 1;
                return prevCount + 1;
              });
            } else {
              clearInterval(interval);
            }
          }, 10); // Sayıyı arttırma hızı (ms cinsinden)
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [count, reached]);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1
        id="appDownloads"
        className="bg-clip-text bg-gradient-to-r  from-[#FFFFFF] to-[#C2C2C2] text-transparent text-[90px] font-semibold leading-[111px] tracking-[-3px] "
      >
        {count}K+
      </h1>
      <h5 className="font-normal text-xl leading-[34px] text-white">
        App Downloads
      </h5>
    </div>
  );
};

export default AppDownloads;
