import Header from "@/components/header/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <div className="container mx-auto text-white">
        <Header/>
      </div>
    </main>
  );
}
