import UsersInformation from "@/components/content/usersInformation/page";
import AppInformation from "@/components/content/appInformation/page";
import HeaderBackground from "@/components/header/headerBg";
import HeaderDescription from "@/components/header/headerDesc";
import Header from "@/components/header/page";
import OurApps from "@/components/content/ourApps/page";
import Footer from "@/components/footer/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[#00030f] ">
      <div className="w-full flex flex-col relative md:h-[878px] h-96">
        <HeaderBackground />
        <div className="w-full relative z-60">
          <HeaderDescription />
          <Header />
        </div>
      </div>
      <div className=" min-h-screen">
        <UsersInformation />
        <AppInformation />
        <OurApps />
        <Footer />
      </div>
    </main>
  );
}
