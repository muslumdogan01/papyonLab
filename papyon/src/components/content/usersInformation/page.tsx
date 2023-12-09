"use client";
import ActiveUser from "./activeUser";
import AppDownloads from "./appDownloads";
import Founded from "./founded";

const UsersInformation = () => {
  return (
    <div className="container mx-auto">
      <div className="w-full flex md:flex-row flex-col justify-center items-center md:mt-32 mt-[400px] lg:space-x-[100px] md:space-x-16">
        <Founded />
        <ActiveUser />
        <AppDownloads />
      </div>
    </div>
  );
};

export default UsersInformation;
