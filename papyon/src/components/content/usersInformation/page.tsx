"use client";
import ActiveUser from "./activeUser";
import AppDownloads from "./appDownloads";
import Founded from "./founded";

const UsersInformation = () => {
  return (
    <div className="w-full flex justify-center items-center mt-32 space-x-[100px]">
      <Founded />
      <ActiveUser />
      <AppDownloads />
    </div>
  );
};

export default UsersInformation;
