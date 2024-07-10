import { Input } from "@nextui-org/input";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { FaSearch, FaCartPlus, FaBell, FaUser, FaFilter, FaQuestionCircle } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { IoMdLogOut } from "react-icons/io";
import { MdLocationPin, MdNotificationsActive, MdShoppingCart } from "react-icons/md";
import { RiTruckFill } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

function Navbar() {

  const [isUser, setIsUser] = useState(false);
  const [isOpen, setIsOpen] = useState(isUser);
  const cookie = Cookies.get("accessToken");
  const navigate = useNavigate();


  const handleUserExist = ()=>{
    if(cookie){
      setIsUser(true)
    }
  }
  
  useEffect(()=>{
    handleUserExist();
  },[])
  
  return (
    <div className="container sticky top-0 bg-white text-black z-10 p-3 pr-0">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-semibold text-inherit">Top Fashion Brands</span>
          <span className="text-xs">Family wear collection</span>
        </div>
        <div className="relative sm:w-full sm:max-w-[400px]">
          <CiSearch className="absolute top-0 left-0 mt-3 ml-5 text-gray-600" />
          <input
            type="search"
            placeholder="Search product"
            className="bg-[#f2f3f5] border-none outline-none px-12 py-2 rounded-xl w-full"
          />
          <VscSettings className="absolute top-0 right-0 mt-3 mr-5 text-gray-600" />
        </div>
        <div className="flex justify-center items-center">
          <div onClick={()=>!isUser && navigate("/customer/login")} className=" bg-gray-400 rounded-md text-2xl h-[40px] mr-5 cursor-pointer">
            <MdShoppingCart className="m-2" />
          </div>
          <div className=" bg-gray-400 rounded-md text-2xl h-[40px] mr-5 cursor-pointer">
            <MdNotificationsActive className="m-2" />
          </div>
          <div className="relative flex mr-5">
            <div onClick={()=>setIsOpen((prev)=>!prev)} className="bg-cyan-400 rounded-md text-2xl h-[40px] w-[40px] text-center cursor-pointer">
              {!isUser ? "G" : <FaUserLarge className="m-2 text-red-500" />}
            </div>

            { isOpen &&
              <div className="absolute top-10 -left-32 bg-gray-100 space-y-3 border rounded-md">
              <div className="px-6 pt-2">
                Welcome, Vijay
              </div>
              <hr className=""/>
              <ul className="px-6 space-y-2 text-xs text-center">
                <li className="flex items-center cursor-pointer"><i className="text-blue-800"><MdLocationPin /></i>Change Address</li>
                <li className="flex items-center cursor-pointer"><i className="text-blue-800"><HiClipboardDocumentList /></i>Order History</li>
                <li className="flex items-center cursor-pointer"><i className="text-blue-800"><RiTruckFill /></i>Track Order</li>
                <li className="flex items-center cursor-pointer"><i className="text-blue-800"><FaQuestionCircle /></i>Help</li>
              </ul>
              <hr />
              <div className="text-xs px-6 pb-2 cursor-pointer">
                <i className="inline-flex pt-1 text-blue-800"><IoMdLogOut /></i>Log out
              </div>
            </div>
            }
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
