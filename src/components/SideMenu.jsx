import React from "react";
import { TfiClose } from "react-icons/tfi";

export const SideMenu = ({ toggleMenu }) => {
  return (
    <div className="fixed top-0 left-0 2xl:left-[6.6rem] w-[300px] h-screen bg-white text-black z-20 flex flex-col">
      <div className="flex h-[70px] min-h-[70px] w-full items-center text-white font-extrabold bg-[#32373a]">
        <div className="w-[48px] h-full"></div>
        <div className="w-full">Kategorier</div>
        <div className="flex items-center justify-center min-w-[48px] h-full">
          <button onClick={toggleMenu} className="p-1">
            <TfiClose size={22} className="text-[#ec6608]" />
          </button>
        </div>
      </div>
      <div>halla</div>
    </div>
  );
};
