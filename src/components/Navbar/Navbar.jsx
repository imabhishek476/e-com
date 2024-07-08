import { Input } from "@nextui-org/input";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { FaSearch, FaCartPlus, FaBell, FaUser, FaFilter } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { MdNotificationsActive, MdShoppingCart } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";

function Navbar() {
  return (
    <div className="container sticky top-0 bg-white text-black z-10 p-3">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-semibold">Top Fashion Brands</span>
          <span className="text-sm">Family wear collection</span>
        </div>
        <div className="relative">
          <CiSearch className="absolute left-3 top-3 text-gray-600" />
          <input
            type="search"
            placeholder="Search product"
            className="pl-10 p-2 text-sm text-gray-600 bg-gray-100 rounded-xl w-[30vw] h-[7vh]"
          />
          <VscSettings className="absolute right-3 top-3 text-gray-600" />
        </div>
        <div className="flex justify-center items-center">
            <div className=" bg-gray-500 rounded-md text-2xl h-[40px] mr-5">
                <MdShoppingCart className="m-2"/>
            </div>
            <div className=" bg-gray-500 rounded-md text-2xl h-[40px] mr-5">
                <MdNotificationsActive className="m-2"/>
            </div>
            <div className="bg-blue-500 rounded-md text-2xl h-[40px] mr-5">
              <FaUserLarge className="m-2 text-red-600"/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
