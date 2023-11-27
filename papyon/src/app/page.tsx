import HeaderBackground from "@/components/header/headerBg";
import HeaderDescription from "@/components/header/headerDesc";
import Header from "@/components/header/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full ">
      <div className="w-full flex flex-col relative min-h-screen">
        <HeaderBackground />
        <div className="container mx-auto relative">
          <HeaderDescription />
          <Header />
        </div>
      </div>
      <div className="container mx-auto min-h-screen">

      </div>
    </main>
  );
}
