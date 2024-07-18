"use client";

import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { NavSideMenu } from "./NavSideMenu";
import { motion, AnimatePresence } from "framer-motion";

export const NavButton = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 1736);
  };

  useEffect(() => {
    // Initial screen size check to set the initial state of sideMenu
    const isLarge = window.innerWidth >= 1736;
    setSideMenu(isLarge);
    setIsLargeScreen(isLarge);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setSideMenu((prev) => !prev);
  };

  return (
    <>
      <AnimatePresence>
        {sideMenu && (
          <>
            <motion.div
              className="fixed inset-0 bg-black opacity-30 z-10 2xl:-z-10 2xl:bg-inherit"
              onClick={isLargeScreen ? null : toggleMenu}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            />
            <NavSideMenu key="nav-side-menu" toggleMenu={toggleMenu} />
          </>
        )}
      </AnimatePresence>

      <button
        onClick={toggleMenu}
        className="bg-black text-white mr-28 flex items-center justify-center p-3 rounded-lg w-[3.6rem] hover:bg-[#1c1e1e] transition-all 200 ease-linear"
      >
        <CiMenuBurger size={24} />
      </button>
    </>
  );
};
