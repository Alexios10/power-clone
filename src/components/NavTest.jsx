import Image from "next/image";
import Link from "next/link";
import headerLogo from "@/app/assets/header-logo.svg";

import React from "react";
import { CiHeart, CiMenuBurger } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { TfiSearch } from "react-icons/tfi";
import { RiChat3Line } from "react-icons/ri";
import { AiOutlineShopping } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi2";

export const NavTest = () => {
  return (
    <div className="bg-[#292d30] xl:h-[4.4rem]  flex flex-shrink flex-grow justify-center flex-wrap">
      <div className="flex items-center h-full p-4">
        <div className="bg-black text-white hidden xl:flex xl:justify-center mr-3 p-3 rounded-lg w-[3.6rem] cursor-pointer hover:bg-[#1c1e1e] transition-all 200 ease-linear">
          <CiMenuBurger size={24} />
        </div>

        <div className="flex gap-3 items-center xl:gap-x-3">
          <div className="bg-black text-white xl:hidden flex justify-center p-3 rounded-lg w-[3.6rem] cursor-pointer hover:bg-[#1c1e1e] transition-all 200 ease-linear">
            <CiMenuBurger size={24} />
          </div>
          <div className="text-white flex gap-4">
            <Link href="/">
              <Image alt="Header Logo" width={150} src={headerLogo} />
            </Link>
            <div className="flex justify-end items-center text-black">
              <input
                className="rounded-sm pl-2 h-12 w-auto xl:w-[20rem] invisible xl:visible"
                placeholder="Hva leter du etter?"
                type="text"
              />
              <div className="absolute p-2 cursor-pointer mt-[8rem] xl:mt-0 hidden xl:block">
                <TfiSearch size={25} />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 xl:gap-0">
            <div>
              <Link
                className="bg-black text-white w-[3.6rem] p-3  rounded-lg flex justify-center items-center hover:bg-[#1c1e1e] transition-all ease-linear cursor-pointer xl:w-auto xl:mr-4"
                href="Kundeservice"
              >
                <span className="hidden xl:block">Kundeservice</span>
                <div>
                  <RiChat3Line className="text-[#ec6608]" size={25} />
                </div>
              </Link>
            </div>

            <Link
              href="FinnButikk"
              className="bg-black text-white w-[3.6rem] p-3 rounded-lg flex justify-center items-center hover:bg-[#1c1e1e] transition-all ease-linear cursor-pointer xl:w-auto xl:mr-4"
            >
              <span className="hidden xl:block">Finn butikk</span>
              <div className="text-[#ec6608]">
                <IoLocationOutline size={25} />
              </div>
            </Link>

            <div className="bg-black text-[#ec6608] flex justify-center w-[3.6rem] p-3 rounded-lg hover:bg-[#1c1e1e] transition-all ease-linear cursor-pointer xl:mr-4">
              <CiHeart size={25} />
            </div>

            <Link
              href="Handlekurv"
              className="flex items-center bg-[#ec6608] text-white p-3 rounded-lg hover:bg-orange-700 transition-all ease-linear xl:mr-4"
            >
              <span>Handlekurv</span>
              <div className="w-8 h-5 flex justify-center mb-1 items-center">
                <AiOutlineShopping size={30} />
              </div>
            </Link>

            <Link
              href="MyPower"
              className="bg-black text-white p-3 rounded-lg flex justify-center hover:bg-[#1c1e1e] transition-all ease-linear cursor-pointer xl:mr-4"
            >
              <span>MyPOWER</span>
              <div>
                <HiOutlineUser className="text-[#ec6608]" size={25} />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Input below XL screen */}
      <div className="flex -mt-3 justify-center w-[60rem] ">
        <div className="p-3 w-full flex justify-end items-center cursor-pointer xl:hidden">
          <input
            placeholder="Hva leter du etter"
            className="rounded-sm h-12 pl-2 w-full xl:hidden"
            type="text"
          />
          <button className="absolute p-2">
            <TfiSearch size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

{
  {
    /* Links for bellow XL screen */
  }
  {
    /* <div className="text-white xl:hidden">Kundeservice</div>
        <div className="text-white xl:hidden">Finn butikk</div>
        <div className="text-[#ec6608] xl:hidden">
          <CiHeart size={25} />
        </div>
        <div className="text-white xl:hidden">Handlekurv</div>
        <div className="text-white xl:hidden">MyPOWER</div> */
  }
  {
    /* Links for bellow XL screen */
  }

  /* <div className="bg-[#292d30] grid grid-cols-5 items-center gap-4 container mx-auto -my-28 xl:-mt-[2.96rem] xl:-mr-96 "> */
}
