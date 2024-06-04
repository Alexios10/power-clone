"use client";
import React, { useEffect, useState } from "react";

import { CiMenuBurger } from "react-icons/ci";
import { NavSideMenu } from "./NavSideMenu";

export const NavButton = () => {
  const [sideMenu, setSideMenu] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 1736);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleMenu() {
    setSideMenu(!sideMenu);
  }
  return (
    <>
      {sideMenu && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-30 z-10 2xl:-z-10 2xl:bg-inherit"
            onClick={handleResize ? null : toggleMenu}
          ></div>
          <NavSideMenu toggleMenu={toggleMenu} />
        </>
      )}

      <button
        onClick={toggleMenu}
        className="bg-black text-white mr-28 hidden xl:flex items-center xl:justify-center p-3 rounded-lg w-[3.6rem] hover:bg-[#1c1e1e] transition-all 200 ease-linear"
      >
        <CiMenuBurger size={24} />
      </button>

      <button
        onClick={toggleMenu}
        className="bg-black text-white shrink-0 xl:hidden flex justify-center items-center  mr-3 p-3 rounded-lg w-[3.6rem] hover:bg-[#1c1e1e] transition-all 200 ease-linear"
      >
        <CiMenuBurger size={24} />
      </button>
    </>
  );
};
