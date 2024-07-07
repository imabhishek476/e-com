import { Input } from "@nextui-org/input";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { FaSearch, FaCartPlus, FaBell, FaUser, FaFilter } from "react-icons/fa";
import { MdNotificationsActive, MdShoppingCart } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";

function Navbar() {
  return (
    <div className="absolute top-0 right-0 bg-white text-black w-[80%]">
      <div className="flex justify-between">
        <div className="flex flex-col m-2">
          <span className="font-semibold">Top Fashion Brands</span>
          <span className="text-sm">Family wear collection</span>
        </div>
        <div className="relative mt-4">
          <FaSearch className="absolute left-3 top-3 text-gray-600" />
          <input
            type="search"
            placeholder="Search product"
            className="pl-10 p-2 text-sm text-gray-600 bg-gray-300 rounded-md w-[300px]"
          />
          <VscSettings className="absolute right-3 top-3 text-gray-600" />
        </div>
        <div className="flex justify-center items-center">
            <div className="w-[40px] bg-gray-500 rounded-md text-2xl h-[40px] mr-5">
                <MdShoppingCart className="m-2"/>
            </div>
            <div className="w-[40px] bg-gray-500 rounded-md text-2xl h-[40px] mr-5">
                <MdNotificationsActive className="m-2"/>
            </div>
            <div className="w-[40px] bg-black rounded-md text-2xl h-[40px] mr-5">
                <CgProfile className="m-2 text-blue-600"/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
