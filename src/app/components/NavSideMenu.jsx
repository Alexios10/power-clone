import Image from "next/image";
import Link from "next/link";
import React from "react";

import { TfiClose } from "react-icons/tfi";
import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { motion } from "framer-motion";

export const NavSideMenu = ({ toggleMenu }) => {
  const categories = [
    {
      link: "/mobil-og-foto",
      img: require("../assets/menu-logos/mobileandcameras.png"),
      name: "Mobil & foto",
      type: "image",
    },
    {
      link: "/klokker-og-trening",
      img: require("../assets/menu-logos/watchesandexercise.png"),
      name: "Klokker & trening",
      type: "image",
    },
    {
      link: "/data-og-tilbehor",
      img: require("../assets/menu-logos/computerscategory.png"),
      name: "Data",
      type: "image",
    },
    {
      link: "/gaming-og-tilbehor",
      img: require("../assets/menu-logos/gamescategory.png"),
      name: "Gaming",
      type: "image",
    },
    {
      link: "/tv-og-lyd",
      img: require("../assets/menu-logos/tvandaudiocategory.png"),
      name: "Tv & lyd",
      type: "image",
    },
    {
      link: "/hvitevarer",
      img: require("../assets/menu-logos/mda_package.png"),
      name: "Hvitevarer",
      type: "image",
    },
    {
      link: "/kjøkkenmaskiner",
      img: require("../assets/menu-logos/kitchenappliances.png"),
      name: "Kjøkkenmaskiner",
      type: "image",
    },
    {
      link: "/smarte-hjem",
      img: require("../assets/menu-logos/smarthomecategory.png"),
      name: "Smarte hjem",
      type: "image",
    },
    {
      link: "/hjem",
      img: require("../assets/menu-logos/homeoutdoor.png"),
      name: "Hjem",
      type: "image",
    },
    {
      link: "/hage-og-fritid",
      img: require("../assets/menu-logos/outdoor.png"),
      name: "Hage og fritid",
      type: "image",
    },
    {
      link: "/skjoennhet-og-velvaere",
      img: require("../assets/menu-logos/beautycategory.png"),
      name: "Velvære",
      type: "image",
    },
    {
      link: "/kjoekken-vaskerom-og-garderobe",
      img: require("../assets/menu-logos/kitchencategory.png"),
      name: "Kjøkken",
      type: "image",
    },
    {
      link: "/power-support",
      img: require("../assets/menu-logos/power-remotefix.png"),
      name: "POWER Support",
      type: "image",
    },
    {
      link: "/eletra-energy",
      img: require("../assets/menu-logos/eletralogo.png"),
      name: "Strøm",
      type: "image",
    },
    {
      link: "/repower-pantekalkulator",
      img: require("../assets/menu-logos/refurbished_phonescategory.png"),
      name: "Pantekalkulator",
      type: "image",
    },
    {
      link: "/kundeservice",
      img: require("../assets/menu-logos/customer-service.png"),
      name: "Kundeservice",
      type: "image",
    },
    {
      link: "/repower",
      img: require("../assets/menu-logos/repower.png"),
      name: "RePOWER",
      type: "image",
    },
    {
      link: "/outlet",
      img: require("../assets/menu-logos/lagerrensing.png"),
      name: "Outlet",
      type: "image",
    },
    {
      link: "/kundeavis",
      img: require("../assets/menu-logos/kundeavis_png.png"),
      name: "Kundeavis",
      type: "image",
    },
    {
      link: "/bedrift.power",
      img: require("../assets/menu-logos/b2b.png"),
      name: "POWER Bedrift",
      type: "image",
    },
    {
      link: "/finn-butikk",
      icon: <IoLocationOutline size={25} />,
      name: "Finn butikk",
      type: "icon",
    },
    {
      link: "",
      icon: <HiOutlineUser className="text-[#ec6608]" size={25} />,
      name: "MyPOWER",
      type: "icon",
    },
    {
      link: "",
      icon: <HiOutlineUser className="text-[#ec6608] invisible" size={25} />,
      name: "Logg inn",
      type: "icon",
    },
    {
      link: "",
      icon: <HiOutlineUser className="text-[#ec6608] invisible" size={25} />,
      name: "Meld deg inn her",
      type: "icon",
    },
  ];

  const showArrow = new Set([
    "Strøm",
    "Pantekalkulator",
    "RePOWER",
    "Outlet",
    "Kundeavis",
    "POWER Bedrift",
    "Finn butikk",
    "MyPOWER",
    "Logg inn",
    "Meld deg inn her",
  ]);

  const lastThreeItems = categories.slice(-3);

  return (
    <>
      <motion.div
        initial={{ x: -900 }}
        animate={{ x: 0 }}
        exit={{
          x: -900,
          width: 0,
          transition: { duration: 0.3, delay: 0, ease: "easeInOut" },
        }}
        transition={{
          duration: 0.3,
          delay: 0.3,
          ease: "easeInOut",
        }}
        className="fixed top-0 left-0 2xl:left-[6.5rem] w-full min-w-[300px] max-w-[1200px] md:w-[300px] md:max-w-[1200px] h-screen bg-[#eeefef] text-black z-20 flex flex-col"
      >
        {/* category header */}
        <div className="flex min-h-[70px] w-full items-center text-white font-extrabold bg-[#32373a]">
          <div className="w-[48px] cursor-pointer shrink-0 h-full flex justify-center items-center"></div>
          <div className="w-full">Kategorier</div>
          <div className="flex items-center justify-center min-w-[48px] h-full">
            <button onClick={toggleMenu} className="p-1">
              <TfiClose size={22} className="text-[#ec6608]" />
            </button>
          </div>
        </div>

        {/* category items */}
        <div className="overflow-auto shadow-lg scrollbar-hide flex-1">
          <div className="flex-1">
            {categories.slice(0, -3).map((item, index) => (
              <ul key={index} className="bg-[#fff] list-none p-0 m-0 w-full">
                <li className="category-button">
                  <Link
                    href={item.link}
                    className={
                      item.name === "MyPOWER"
                        ? "cursor-default flex w-full h-full font-semibold text-[#41474a]"
                        : "flex w-full h-full text-[#41474a]"
                    }
                  >
                    <div
                      className={
                        item.name === "MyPOWER"
                          ? "flex w-full items-center bg-[#eeefef]"
                          : item.name === "Logg inn" ||
                            item.name === "Meld deg inn her"
                          ? "bg-[#eeefef] hover:bg-[#d0d0d0] flex w-full items-center"
                          : "flex w-full items-center"
                      }
                    >
                      <div className="h-full flex items-center p-2">
                        {item.type === "image" ? (
                          <Image
                            alt={item.name}
                            src={item.img}
                            className="w-[40px] shrink-0"
                          />
                        ) : item.type === "icon" ? (
                          <div className="w-[33.5px] flex justify-center items-center p-1">
                            {item.icon}
                          </div>
                        ) : null}
                      </div>

                      <span className="w-full">{item.name}</span>
                    </div>
                  </Link>
                  {!showArrow.has(item.name) && (
                    <div className="arrow-container">
                      <i>
                        <RiArrowDropRightLine size={32} />
                      </i>
                    </div>
                  )}
                </li>
              </ul>
            ))}
          </div>

          {/* separate container for the last three items */}
          <div className="flex flex-col justify-end mb-14 bg-[#fff]">
            {lastThreeItems.map((item, index) => (
              <ul key={index} className="bg-[#fff] list-none p-0 m-0 w-full">
                <li className="category-button">
                  <Link
                    href={item.link}
                    className={
                      item.name === "MyPOWER"
                        ? "cursor-default flex w-full h-full font-semibold text-[#41474a]"
                        : "flex w-full h-full text-[#41474a]"
                    }
                  >
                    <div
                      className={
                        item.name === "MyPOWER"
                          ? "flex w-full items-center bg-[#eeefef]"
                          : item.name === "Logg inn" ||
                            item.name === "Meld deg inn her"
                          ? "bg-[#eeefef] hover:bg-[#d0d0d0] flex w-full items-center"
                          : "flex w-full items-center"
                      }
                    >
                      <div className="h-full flex items-center p-2">
                        {item.type === "image" ? (
                          <Image
                            alt={item.name}
                            src={item.img}
                            className="w-[35px] shrink-0"
                          />
                        ) : item.type === "icon" ? (
                          <div className="w-[33.5px] flex justify-center items-center p-1">
                            {item.icon}
                          </div>
                        ) : null}
                      </div>

                      <span className="w-full">{item.name}</span>
                    </div>
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};
