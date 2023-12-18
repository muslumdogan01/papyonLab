import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  width: number;
  height: number;
}

const Logo: React.FC<LogoProps> = ({ width, height }) => {
  return (
    <Link href="/essay-mate">
      <Image src="/easy-mate/logo.svg" width={width} height={height} alt="papyon" className="hidden md:block" />
      <Image src="/logo.svg" width={width} height={height} alt="papyon" className="block md:hidden" />
    </Link>
  );
};

export default Logo;
