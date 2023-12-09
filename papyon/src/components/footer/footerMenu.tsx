import React from "react";

const FooterMenu = () => {
  return (
    <div className="w-full flex bg-[#00030F] h-36">
      <div className="container mx-auto ">
        <div className="w-full flex justify-between items-center h-full">
          <div className="md:flex hidden">
            <ul className="flex space-x-[50px]">
              <li className="text-base leading-6 opacity-70 text-white cursor-pointer hover:underline">
                ABOUT US
              </li>
              <li className="text-base leading-6 opacity-70 text-white cursor-pointer hover:underline">
                PAPYON APPS
              </li>
              <li className="text-base leading-6 opacity-70 text-white cursor-pointer hover:underline">
                PAPYON BLOG
              </li>
              <li className="text-base leading-6 opacity-70 text-white cursor-pointer hover:underline">
                CONTACT US
              </li>
            </ul>
          </div>
          <div className="flex text-white text-xl leading-8">
            Made with ❤️ in Izmir, Turkey
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
