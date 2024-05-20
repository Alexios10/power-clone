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
    <nav className="bg-[#292d30] h-[4.4rem] flex justify-center items-center ">
      <div className="bg-[#000] text-white p-3 mr-4 rounded-lg w-[3.6rem] flex justify-center items-center cursor-pointer hover:bg-[#1c1e1e] transition-all 200 ease-linear">
        <CiMenuBurger size={24} />
      </div>

      <header className="flex justify-center items-center space-x-4 h-full w-[1200px] mr-10">
        {/* Logo and Input Field */}
        <div className="relative flex flex-shrink flex-grow justify-end items-center">
          <div className="flex space-x-4">
            <Link href="/">
              <Image src={headerLogo} alt="header logo" width={150} />
            </Link>
            <input
              className="rounded-sm h-12 w-[22rem] outline-none text-sm pl-2 border-[#c6c8c9]"
              placeholder="Hva leter du etter?"
              type="text"
            />
          </div>
          <div className="absolute p-2 mr-2 cursor-pointer">
            <TfiSearch size={25} />
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          {/*  */}
          <li id="header-elements">
            <Link href="Kundeservice" className="flex space-x-1 items-center">
              <p>Kundeservice</p>
              <div>
                <RiChat3Line className="text-[#ec6608]" size={25} />
              </div>
            </Link>
          </li>

          <li className="bg-black text-white p-3 rounded-lg hover:bg-[#1c1e1e] transition-all ease-linear cursor-pointer">
            <Link href="FinnButikk" className="flex space-x-1 items-center">
              <p className="h-6 flex items-center">Finn butikk</p>
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

          <li id="header-elements">
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
