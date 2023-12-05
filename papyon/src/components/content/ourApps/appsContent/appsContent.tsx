import React from "react";
import Roosefy from "./roosefy";
import BmiBuddy from "./bmi";
import Overhead from "./lenzai";
import OriaApps from "./oria";

const AppsContent = () => {
  return (
    <div className="mt-20 w-full flex flex-col">
      <Roosefy />
      <BmiBuddy />
      <OriaApps />
      <Overhead />
    </div>
  );
};

export default AppsContent;
