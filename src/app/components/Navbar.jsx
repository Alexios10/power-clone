import Image from "next/image";
import Link from "next/link";
import headerLogo from "../assets/header-logo.svg";

import { CiHeart, CiMenuBurger } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { TfiSearch } from "react-icons/tfi";
import { RiChat3Line } from "react-icons/ri";
import { AiOutlineShopping } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi2";
import { NavButton } from "./NavButton";

export const Navbar = () => {
  return (
    <>
      <div className="bg-[#292d30] xl:h-[4.4rem] w-screen flex justify-center items-center fixed flex-wrap">
        <div className="hidden xl:flex">
          <NavButton />
        </div>

        <div className="flex justify-center w-[960px] mr-[6rem] items-center px-4 xl:px-0 h-full py-3 xl:py-4">
          {/* Left conatiner */}
          <div className="flex w-full items-start gap-3 mr-4 text-black">
            <div className="xl:hidden flex">
              <NavButton />
            </div>
            <Link className="sm:shrink-0" href="/">
              <Image alt="Header Logo" width={150} src={headerLogo} />
            </Link>
            <div className="xl:flex w-[30rem] items-center justify-end hidden">
              <input
                className="rounded-sm pl-2 h-12 w-full"
                placeholder="Hva leter du etter?"
                type="text"
              />
              <div className="absolute p-2 mr-2 cursor-pointer xl:mt-0">
                <TfiSearch size={25} />
              </div>
            </div>
          </div>
          {/* Left conatiner */}

          {/* Right container */}
          <div className="flex xl:w-full xl:justify-normal justify-end items-center gap-3 xl:gap-0">
            <Link
              className="bg-black text-white w-[3.6rem] p-3 hidden rounded-lg sm:flex justify-center items-center hover:bg-[#1c1e1e] transition-all ease-linear cursor-pointer xl:w-auto xl:mr-4"
              href="Kundeservice"
            >
              <span className="hidden xl:block">Kundeservice</span>
              <div>
                <RiChat3Line className="text-[#ec6608]" size={25} />
              </div>
            </Link>

            <Link
              href="FinnButikk"
              className="bg-black hidden text-white w-[3.6rem] p-3 rounded-lg sm:flex justify-center items-center hover:bg-[#1c1e1e] transition-all ease-linear cursor-pointer xl:w-auto xl:mr-4"
            >
              <span className="hidden xl:flex xl:h-6 items-center">
                Finn butikk
              </span>
              <div className="text-[#ec6608] ">
                <IoLocationOutline size={25} />
              </div>
            </Link>

            <div className="bg-black text-[#ec6608] flex justify-center w-[3.6rem] p-3 rounded-lg hover:bg-[#1c1e1e] transition-all ease-linear cursor-pointer xl:mr-4">
              <CiHeart size={25} />
            </div>

            <Link
              href="Handlekurv"
              className="md:flex items-center hidden bg-[#ec6608] text-white p-3 rounded-lg hover:bg-orange-700 transition-all ease-linear xl:mr-4"
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
              <span className="hidden md:block">MyPOWER</span>
              <div>
                <HiOutlineUser className="text-[#ec6608]" size={25} />
              </div>
            </Link>
          </div>
          {/* Right container */}
        </div>

        {/* Input below XL screen */}
        <div className="flex w-[960px] mr-[6rem] px-4 gap-3 md:gap-0">
          <div className="w-full pb-3 flex justify-end items-center cursor-pointer xl:hidden">
            <input
              placeholder="Hva leter du etter"
              className="rounded-sm h-12 pl-2 w-full xl:hidden"
              type="text"
            />
            <button className="absolute p-2 mr-2">
              <TfiSearch size={25} />
            </button>
          </div>
          <div className="flex items-center pr-1 pb-3">
            <Link
              href="Handlekurv"
              className="flex items-center justify-center md:hidden bg-[#ec6608] text-white p-3 rounded-lg hover:bg-orange-700 transition-all ease-linear xl:mr-4"
            >
              <span className="sm:block hidden">Handlekurv</span>
              <div className="w-8 h-5 flex justify-center mb-1 items-center">
                <AiOutlineShopping size={30} />
              </div>
            </Link>
          </div>
        </div>
        {/* Input below XL screen */}
      </div>
    </>
  );
};
