import React from "react";
import Image from "next/image";

interface LogoProps {
  width: number;
  height: number;
}

const Logo: React.FC<LogoProps> = ({width,height}) => {
  return <Image src="/logo.svg" width={width} height={height} alt="papyon" />;
};

export default Logo;
