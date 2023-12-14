import Image from "next/image";
import React from "react";
import AppsHeader from "./appsHeader";
import AppsContent from "./appsContent/appsContent";

const OurApps = () => {
  return (
    <div className="relative">
      <AppsHeader />
      <AppsContent />
    </div>
  );
};

export default OurApps;
