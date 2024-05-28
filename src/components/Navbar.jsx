import React from "react";
import { CiHeart, CiMenuBurger } from "react-icons/ci";
import { RiChat3Line } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi2";
import { TfiSearch } from "react-icons/tfi";

import headerLogo from "@/app/assets/header-logo.svg";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-[#292d30] xl:h-[4.4rem] flex justify-center items-center w-full">
      <div className="absolute z-10 xl:relative bg-[#000] text-white p-3 mr-4 rounded-lg w-[3.6rem] flex justify-center cursor-pointer hover:bg-[#1c1e1e] transition-all 200 ease-linear">
        <CiMenuBurger size={24} />
      </div>

      <header className="flex justify-center items-center space-x-4 h-full mr-10">
        {/* Logo and Input Field */}
        <div className="relative xl:flex flex-shrink flex-grow items-center">
          <Link href="/" className="absolute xl:relative xl:mr-3">
            <Image src={headerLogo} alt="header logo" width={150} />
          </Link>
          <div className="flex justify-end items-center xl:space-x-4 xl:justify-end xl:items-center">
            <input
              className="rounded-sm h-12 w-screen basis-9/12 mt-[8rem] xl:basis-auto xl:w-[22rem] xl:mt-0 outline-none text-sm pl-2 border-[#c6c8c9]"
              placeholder="Hva leter du etter?"
              type="text"
            />
            <div className="absolute p-2 cursor-pointer mt-[8rem] xl:mt-0">
              <TfiSearch size={25} />
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-4 absolute w-screen justify-end xl:w-auto xl:h-full xl:relative">
          {/*  */}
          <li className="bg-black text-white p-3 rounded-lg hover:bg-[#1c1e1e] transition-all ease-linear cursor-pointer">
            <Link href="Kundeservice" className="flex space-x-1 items-center">
              <span className="hidden xl:block">Kundeservice</span>
              <div>
                <RiChat3Line className="text-[#ec6608]" size={25} />
              </div>
            </Link>
          </li>

          <li className="bg-black text-white p-3 rounded-lg hover:bg-[#1c1e1e] transition-all ease-linear cursor-pointer">
            <Link href="FinnButikk" className="flex space-x-1 items-center">
              <p className="h-6 items-center hidden xl:block ">Finn butikk</p>
              <div className="text-[#ec6608]">
                <IoLocationOutline size={25} />
              </div>
            </Link>
          </li>

          <li className="bg-black text-[#ec6608] p-3 rounded-lg hover:bg-[#1c1e1e] transition-all ease-linear cursor-pointer">
            <CiHeart size={25} />
          </li>

          <li className="bg-[#ec6608] text-white p-3 rounded-lg hover:bg-orange-700 transition-all ease-linear cursor-pointer">
            <Link href="Handlekurv" className="flex space-x-1 items-center">
              <p>Handlekurv</p>
              <div>
                <AiOutlineShopping size={25} />
              </div>
            </Link>
          </li>

          <li className="bg-black text-white p-3 rounded-lg hover:bg-[#1c1e1e] transition-all ease-linear cursor-pointer">
            <Link href="MyPower" className="flex space-x-1 items-center">
              <p>MyPOWER</p>
              <div>
                <HiOutlineUser className="text-[#ec6608]" size={25} />
              </div>
            </Link>
          </li>
        </ul>
      </header>
    </nav>
  );
};
