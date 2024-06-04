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
    <div className="fixed top-0 left-0 2xl:left-[6.6rem] w-full min-w-[300px]  max-w-[1200px] md:w-[300px] md:max-w-[1200px] h-screen bg-white text-black z-20 flex flex-col">
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
      <div className="h-full overflow-auto shadow-lg scrollbar-hide">
        <ul className="bg-[#fff] h-full list-none p-0 m-0 w-full">
          <li className="category-button">
            {" "}
            <Link
              href=""
              className="flex items-center w-full h-full text-[#41474a]"
            >
              <div className="w-[48px] h-full flex justify-center items-center shrink-0">
                <Image loading="lazy" src={mobileImg} alt="Mobile logo" />
              </div>
              <span className="w-full">Mobil &amp; foto</span>

              <div className="arrow-container">
                <i>
                  <RiArrowDropRightLine size={32} />
                </i>
              </div>
            </Link>
          </li>

          <li className="category-button">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image loading="lazy" src={watchImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Klokker &amp; trening
              </span>
              <div className="arrow-container">
                <i>
                  <RiArrowDropRightLine size={32} />
                </i>
              </div>
            </Link>
          </li>

          <li className="category-button">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image loading="lazy" src={computerImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Data
              </span>
              <div className="arrow-container">
                <i>
                  <RiArrowDropRightLine size={32} />
                </i>
              </div>
            </Link>
          </li>

          <li className="category-button">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image loading="lazy" src={gamesImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Gaming
              </span>
              <div className="arrow-container">
                <i>
                  <RiArrowDropRightLine size={32} />
                </i>
              </div>
            </Link>
          </li>

          <li className="category-button">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image loading="lazy" src={tvImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                TV &amp; lyd
              </span>
              <div className="arrow-container">
                <i>
                  <RiArrowDropRightLine size={32} />
                </i>
              </div>
            </Link>
          </li>

          <li className="category-button">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image loading="lazy" src={mdaImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Hvitevarer
              </span>{" "}
              <div className="arrow-container">
                <i>
                  <RiArrowDropRightLine size={32} />
                </i>
              </div>
            </Link>
          </li>

          <li className="category-button">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image
                  loading="lazy"
                  src={kitchenAppleancesImg}
                  alt="Mobile logo"
                />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Kjøkkenmaskiner
              </span>{" "}
              <div className="arrow-container">
                <i>
                  <RiArrowDropRightLine size={32} />
                </i>
              </div>
            </Link>
          </li>

          <li className="category-button">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image loading="lazy" src={smartHomeImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Smarte hjem
              </span>
              <div className="arrow-container">
                <i>
                  <RiArrowDropRightLine size={32} />
                </i>
              </div>
            </Link>
          </li>

          <li className="category-button">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image loading="lazy" src={homeImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Hjem
              </span>
              <div className="arrow-container">
                <i>
                  <RiArrowDropRightLine size={32} />
                </i>
              </div>
            </Link>
          </li>

          <li className="category-button">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image loading="lazy" src={outdoorImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Hage &amp; fritid
              </span>
              <div className="arrow-container">
                <i>
                  <RiArrowDropRightLine size={32} />
                </i>
              </div>
            </Link>
          </li>

          <li className="category-button">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image loading="lazy" src={beautyImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Velvære
              </span>
              <div className="arrow-container">
                <i>
                  <RiArrowDropRightLine size={32} />
                </i>
              </div>
            </Link>
          </li>

          <li className="category-button">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image loading="lazy" src={kitchenImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Kjøkken
              </span>
              <div className="arrow-container">
                <i>
                  <RiArrowDropRightLine size={32} />
                </i>
              </div>
            </Link>
          </li>

          <li className="category-button">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image loading="lazy" src={powerRemoteImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                POWER Support
              </span>{" "}
              <div className="arrow-container">
                <i>
                  <RiArrowDropRightLine size={32} />
                </i>
              </div>
            </Link>
          </li>

          <li className="category-button">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image loading="lazy" src={eletraImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Strøm
              </span>
            </Link>
          </li>

          <li className="category-button">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image loading="lazy" src={refurbishImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Pantekalkulator
              </span>
            </Link>
          </li>

          <li className="category-button">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image
                  loading="lazy"
                  src={customerServiceImg}
                  alt="Mobile logo"
                />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Kundeservice
              </span>{" "}
              <div className="arrow-container">
                <i>
                  <RiArrowDropRightLine size={32} />
                </i>
              </div>
            </Link>
          </li>

          <li className="category-button">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image loading="lazy" src={repowerImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                RePOWER
              </span>
            </Link>
          </li>

          <li className="category-button">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image loading="lazy" src={lagerRensingImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Outlet
              </span>
            </Link>
          </li>

          <li className="category-button">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image loading="lazy" src={kundeAvisImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                Kundeavis
              </span>
            </Link>
          </li>

          <li className="category-button">
            {" "}
            <Link href="" className="flex w-full h-full">
              <div className="w-[48px] flex shrink-0 items-center justify-center">
                <Image loading="lazy" src={powerBedriftImg} alt="Mobile logo" />
              </div>
              <span className="h-full w-full items-center flex text-[#41474a]">
                POWER Bedrift
              </span>
            </Link>
          </li>

          <li className="category-button">
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

          <div className="bg-[#f5f7f7] min-h-[216px]">
            <li className="flex justify-between items-center h-[48px] border-b-[1px] text-sm">
              {" "}
              <div className="flex w-full h-full">
                <div className="w-[48px] flex shrink-0 items-center justify-center">
                  <HiOutlineUser className="text-[#ec6608]" size={25} />
                </div>
                <span className="h-full w-full items-center flex text-[#41474a]">
                  MyPOWER
                </span>
              </div>
            </li>

            <li className="category-button">
              {" "}
              <Link href="" className="flex w-full h-full">
                <div className="w-[48px] flex shrink-0 items-center justify-center invisible"></div>
                <span className="h-full w-full items-center flex text-[#41474a]">
                  Logg inn
                </span>
              </Link>
            </li>

            <li className="category-button">
              {" "}
              <Link href="" className="flex w-full h-full">
                <div className="w-[48px] flex shrink-0 items-center justify-center invisible"></div>
                <span className="h-full w-full items-center flex text-[#41474a]">
                  Meld deg inn her
                </span>
              </Link>
            </li>
          </div>
        </ul>
      </div>
      {/* Category list container */}
    </div>
  );
};
