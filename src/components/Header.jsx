import React from "react";
import { CiHeart, CiMenuBurger } from "react-icons/ci";
import { BsChat } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi2";
import { TfiSearch } from "react-icons/tfi";
import headerLogo from "@/app/assets/header-logo.svg";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="bg-[#292d30] flex justify-center items-center h-[4.4rem] space-x-4">
      <div className="bg-[#000] text-white p-3 rounded-lg w-[3.6rem] flex justify-center items-center cursor-pointer hover:bg-[#1c1e1e] transition-all 200 ease-linear">
        <CiMenuBurger size={25} />
      </div>

      <a href="/" className=" mb-3">
        <Image src={headerLogo} alt="header logo" width={150} height={33} />
      </a>
      <div className="relative flex justify-end items-center">
        <input
          className="rounded-md h-12 w-[22rem] outline-none text-sm pl-2 border-[#c6c8c9]"
          placeholder="Hva leter du etter?"
          type="text"
        />

        <div className="absolute p-4 cursor-pointer">
          <TfiSearch size={25} />
        </div>
      </div>

      <div id="header-elements">
        <p>Kundeservice</p>
        <div className="pl-2 text-[#ec6608]">
          <BsChat size={20} />
        </div>
      </div>

      <div className="bg-black text-white p-[0.7rem] h-[3.2rem] rounded-lg flex items-center space-x-1 hover:bg-[#1c1e1e] transition-all ease-linear cursor-pointer">
        <p>
          Finn <br /> butikk
        </p>
        <div className=" text-[#ec6608]">
          <IoLocationOutline size={25} />
        </div>
      </div>

      <div className=" bg-black text-[#ec6608] p-[0.7rem] rounded-lg hover:bg-[#1c1e1e] transition-all ease-linear cursor-pointer">
        <CiHeart size={30} />
      </div>

      <div className="bg-[#ec6608] text-white p-[0.8rem] rounded-lg flex items-center space-x-1 hover:bg-orange-700 transition-all ease-linear cursor-pointer">
        <p>Handlekurv</p>
        <div>
          <AiOutlineShopping size={25} />
        </div>
      </div>

      <div id="header-elements">
        <p>MyPOWER</p>
        <div className="pl-2">
          <HiOutlineUser className="text-[#ec6608]" size={25} />
        </div>
      </div>
    </header>
  );
};
