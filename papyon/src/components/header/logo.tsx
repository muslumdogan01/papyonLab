import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  width: number;
  height: number;
}

const Logo: React.FC<LogoProps> = ({ width, height }) => {
  return (
    <Link href="/">
      <Image src="/logo.svg" width={width} height={height} alt="papyon" />
    </Link>
  );
};

export default Logo;
