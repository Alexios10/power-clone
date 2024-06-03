import Image from "next/image";
import Link from "next/link";
import React from "react";

import mobileImg from "../assets/menu-logos/mobileandcameras.png";
import watchImg from "../assets/menu-logos/watchesandexercise.png";
import computerImg from "../assets/menu-logos/computerscategory.png";
import gamesImg from "../assets/menu-logos/gamescategory.png";
import tvImg from "../assets/menu-logos/tvandaudiocategory.png";
import mdaImg from "../assets/menu-logos/mda_package.png";
import kitchenAppleancesImg from "../assets/menu-logos/kitchenappliances.png";
import smartHomeImg from "../assets/menu-logos/smarthomecategory.png";
import homeImg from "../assets/menu-logos/homeoutdoor.png";
import outdoorImg from "../assets/menu-logos/outdoor.png";
import beautyImg from "../assets/menu-logos/beautycategory.png";
import kitchenImg from "../assets/menu-logos/kitchencategory.png";
import powerRemoteImg from "../assets/menu-logos/power-remotefix.png";
import eletraImg from "../assets/menu-logos/eletralogo.png";
import refurbishImg from "../assets/menu-logos/refurbished_phonescategory.png";
import customerServiceImg from "../assets/menu-logos/customer-service.png";
import repowerImg from "../assets/menu-logos/repower.png";
import lagerRensingImg from "../assets/menu-logos/lagerrensing.png";
import kundeAvisImg from "../assets/menu-logos/kundeavis_png.png";
import powerBedriftImg from "../assets/menu-logos/b2b.png";

import { TfiClose } from "react-icons/tfi";
import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";

export const NavSideMenu = ({ toggleMenu }) => {
  return (
    <div className="fixed top-0 left-0 2xl:left-[6.6rem] w-[300px] max-w-[1200px] h-screen bg-white text-black z-20 flex flex-col">
      {/* Category header */}
      <div className="flex h-[70px] min-h-[70px] w-full items-center text-white font-extrabold bg-[#32373a]">
        <div className="w-[48px] shrink-0 p-4 h-full flex justify-center items-cente">
          {/* <i>
            <RiArrowDropLeftLine size={32} />
          </i> */}
        </div>
        <div className="w-full">Kategorier</div>

        <div className="flex items-center justify-center min-w-[48px] h-full">
          <button onClick={toggleMenu} className="p-1">
            <TfiClose size={22} className="text-[#ec6608]" />
          </button>
        </div>
      </div>
      {/* Category header */}

      {/* Category list container */}
      <div className="h-full overflow-auto shadow-lg scrollbar-hide ">
        <ul className="bg-[#fff] h-full list-none p-0 m-0 w-full">
          <li className="flex justify-between items-center h-[48px] border-b-[1px] text-sm">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image src={mobileImg} alt="Mobile logo" />
              </div>
              <span className="w-full items-center flex text-[#41474a]">
                Mobil &amp; foto
              </span>
            </Link>
            <div className="w-[48px] h-full flex p-4 justify-center items-center border-l-2 text-[#41474a]">
              <i>
                <RiArrowDropRightLine size={32} />
              </i>
            </div>
          </li>

          <li className="flex justify-between items-center h-[48px] border-b-[1px] text-sm">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image src={watchImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Klokker &amp; trening
              </span>
            </Link>
            <div className="w-[48px] h-full flex p-4 justify-center items-center border-l-2 text-[#41474a]">
              <i>
                <RiArrowDropRightLine size={32} />
              </i>
            </div>
          </li>

          <li className="flex justify-between items-center h-[48px] border-b-[1px] text-sm">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image src={computerImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Data
              </span>
            </Link>
            <div className="w-[48px] h-full flex p-4 justify-center items-center border-l-2 text-[#41474a]">
              <i>
                <RiArrowDropRightLine size={32} />
              </i>
            </div>
          </li>

          <li className="flex justify-between items-center h-[48px] border-b-[1px] text-sm">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image src={gamesImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Gaming
              </span>
            </Link>
            <div className="w-[48px] h-full flex p-4 justify-center items-center border-l-2 text-[#41474a]">
              <i>
                <RiArrowDropRightLine size={32} />
              </i>
            </div>
          </li>

          <li className="flex justify-between items-center h-[48px] border-b-[1px] text-sm">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image src={tvImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                TV &amp; lyd
              </span>
            </Link>
            <div className="w-[48px] h-full flex p-4 justify-center items-center border-l-2 text-[#41474a]">
              <i>
                <RiArrowDropRightLine size={32} />
              </i>
            </div>
          </li>

          <li className="flex justify-between items-center h-[48px] border-b-[1px] text-sm">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image src={mdaImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Hvitevarer
              </span>
            </Link>
            <div className="w-[48px] h-full flex p-4 justify-center items-center border-l-2 text-[#41474a]">
              <i>
                <RiArrowDropRightLine size={32} />
              </i>
            </div>
          </li>

          <li className="flex justify-between items-center h-[48px] border-b-[1px] text-sm">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image src={kitchenAppleancesImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Kjøkkenmaskiner
              </span>
            </Link>
            <div className="w-[48px] h-full flex p-4 justify-center items-center border-l-2 text-[#41474a]">
              <i>
                <RiArrowDropRightLine size={32} />
              </i>
            </div>
          </li>

          <li className="flex justify-between items-center h-[48px] border-b-[1px] text-sm">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image src={smartHomeImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Smarte hjem
              </span>
            </Link>
            <div className="w-[48px] h-full flex p-4 justify-center items-center border-l-2 text-[#41474a]">
              <i>
                <RiArrowDropRightLine size={32} />
              </i>
            </div>
          </li>

          <li className="flex justify-between items-center h-[48px] border-b-[1px] text-sm">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image src={homeImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Hjem
              </span>
            </Link>
            <div className="w-[48px] h-full flex p-4 justify-center items-center border-l-2 text-[#41474a]">
              <i>
                <RiArrowDropRightLine size={32} />
              </i>
            </div>
          </li>

          <li className="flex justify-between items-center h-[48px] border-b-[1px] text-sm">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image src={outdoorImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Hage &amp; fritid
              </span>
            </Link>
            <div className="w-[48px] h-full flex p-4 justify-center items-center border-l-2 text-[#41474a]">
              <i>
                <RiArrowDropRightLine size={32} />
              </i>
            </div>
          </li>

          <li className="flex justify-between items-center h-[48px] border-b-[1px] text-sm">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image src={beautyImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Velvære
              </span>
            </Link>
            <div className="w-[48px] h-full flex p-4 justify-center items-center border-l-2 text-[#41474a]">
              <i>
                <RiArrowDropRightLine size={32} />
              </i>
            </div>
          </li>

          <li className="flex justify-between items-center h-[48px] border-b-[1px] text-sm">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image src={kitchenImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Kjøkken
              </span>
            </Link>
            <div className="w-[48px] h-full flex p-4 justify-center items-center border-l-2 text-[#41474a]">
              <i>
                <RiArrowDropRightLine size={32} />
              </i>
            </div>
          </li>

          <li className="flex justify-between items-center h-[48px] border-b-[1px] text-sm">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image src={powerRemoteImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                POWER Support
              </span>
            </Link>
            <div className="w-[48px] h-full flex p-4 justify-center items-center border-l-2 text-[#41474a]">
              <i>
                <RiArrowDropRightLine size={32} />
              </i>
            </div>
          </li>

          <li className="flex justify-between items-center h-[48px] border-b-[1px] text-sm">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image src={eletraImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Strøm
              </span>
            </Link>
          </li>

          <li className="flex justify-between items-center h-[48px] border-b-[1px] text-sm">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image src={refurbishImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Pantekalkulator
              </span>
            </Link>
          </li>

          <li className="flex justify-between items-center h-[48px] border-b-[1px] text-sm">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image src={customerServiceImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Kundeservice
              </span>
            </Link>
            <div className="w-[48px] h-full flex p-4 justify-center items-center border-l-2 text-[#41474a]">
              <i>
                <RiArrowDropRightLine size={32} />
              </i>
            </div>
          </li>

          <li className="flex justify-between items-center h-[48px] border-b-[1px] text-sm">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image src={repowerImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                RePOWER
              </span>
            </Link>
          </li>

          <li className="flex justify-between items-center h-[48px] border-b-[1px] text-sm">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image src={lagerRensingImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Outlet
              </span>
            </Link>
          </li>

          <li className="flex justify-between items-center h-[48px] border-b-[1px] text-sm">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image src={kundeAvisImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Kundeavis
              </span>
            </Link>
          </li>

          <li className="flex justify-between items-center h-[48px] border-b-[1px] text-sm">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image src={powerBedriftImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                POWER Bedrift
              </span>
            </Link>
          </li>

          <li className="flex justify-between items-center h-[48px] border-b-[1px] text-sm">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <IoLocationOutline size={25} />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Finn butikk
              </span>
            </Link>
          </li>

          <li className="bg-[#f5f7f7] min-h-[216px]">
            <li className="flex justify-between items-center h-[48px] border-b-[1px] text-sm">
              {" "}
              <Link href="" className="flex w-full h-full">
                <div className="w-[48px] flex shrink-0 items-center justify-center">
                  <HiOutlineUser className="text-[#ec6608]" size={25} />
                </div>
                <span className="h-full w-full items-center flex text-[#41474a]">
                  MyPOWER
                </span>
              </Link>
            </li>

            <li className="flex justify-between items-center h-[48px] border-b-[1px] text-sm">
              {" "}
              <Link href="" className="flex w-full h-full">
                <div className="w-[48px] flex shrink-0 items-center justify-center invisible"></div>
                <span className="h-full w-full items-center flex text-[#41474a]">
                  Logg inn
                </span>
              </Link>
            </li>

            <li className="flex justify-between items-center h-[48px] border-b-[1px] text-sm">
              {" "}
              <Link href="" className="flex w-full h-full">
                <div className="w-[48px] flex shrink-0 items-center justify-center invisible"></div>
                <span className="h-full w-full items-center flex text-[#41474a]">
                  Meld deg inn her
                </span>
              </Link>
            </li>
          </li>
        </ul>
      </div>
      {/* Category list container */}
    </div>
  );
};
