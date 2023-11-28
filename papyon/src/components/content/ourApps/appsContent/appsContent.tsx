import React from "react";
import Roosefy from "./roosefy";
import BmiBuddy from "./bmi";
import Overhead from "./overhead";
import OriaApps from "./oria";

const AppsContent = () => {
  return (
    <div className="space-y-[100px] mt-20 w-full flex flex-col px-12">
      <Roosefy />
      <BmiBuddy />
      <OriaApps />
      <Overhead />
    </div>
  );
};

export default AppsContent;
