import HeaderBackground from "@/components/header/headerBg";
import HeaderDescription from "@/components/header/headerDesc";
import Header from "@/components/header/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full ">
      <div className="w-full flex relative  min-h-screen">
        <HeaderBackground/>
        <div className="container mx-auto text-white relative">
          <HeaderDescription/>
          <Header />
        </div>
      </div>
    </main>
  );
}
