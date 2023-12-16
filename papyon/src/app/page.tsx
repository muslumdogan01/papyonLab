import UsersInformation from "@/components/content/usersInformation/page";
import AppInformation from "@/components/content/appInformation/page";
import HeaderBackground from "@/components/header/headerBg";
import HeaderDescription from "@/components/header/headerDesc";
import Header from "@/components/header/page";
import OurApps from "@/components/content/ourApps/page";
import Footer from "@/components/footer/page";
import Milestones from "@/components/content/usersInformation/milestones";
import Image from "next/image";
import TopLink from "@/components/top-link/page";

export default function Home() {
  return (
    <main className="flex  flex-col w-full bg-[#00030f] relative">
      <div className="w-full  flex flex-col relative md:h-[800px] lg:h-[750px] h-[600px]">
        <HeaderBackground />
        <div className="w-full relative z-60">
          <HeaderDescription />
          <Header />
        </div>
      </div>
      <div className="z-10 relative">
        <Milestones />
        <UsersInformation />
      </div>

      <div className=" min-h-screen z-10">
        <div className="md:mt-44 mt-[100px]">
        <AppInformation />
        </div>
        <div className="h-1"></div>
        <OurApps />
        <Footer />
      </div>
      <div className="absolute top-0 left-0 -z-0 bloc md:hidden">
        <Image src="/mobileDots.svg" alt="ourApps" width={700} height={700} />
      </div>
      <TopLink/>
    </main>
  );
}
