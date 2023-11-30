import UsersInformation from "@/components/content/usersInformation/page";
import AppInformation from "@/components/content/appInformation/page";
import HeaderBackground from "@/components/header/headerBg";
import HeaderDescription from "@/components/header/headerDesc";
import Header from "@/components/header/page";
import OurApps from "@/components/content/ourApps/page";
import Footer from "@/components/footer/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full ">
      <div className="w-full flex flex-col relative h-[878px]">
        <HeaderBackground />
        <div className="container mx-auto relative">
          <HeaderDescription />
          <Header />
        </div>
      </div>
      <div className="container mx-auto min-h-screen">
        <UsersInformation/>
        <AppInformation/>
        <OurApps/>
        <Footer/>
      </div>
    </main>
  );
}
