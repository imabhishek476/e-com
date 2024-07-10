import React from "react";
import logo from "../../assets/images/signup/logo.png";
import customer from "../../assets/images/signup/customer.png";
import Line from "../../assets/images/signup/Line.png";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function Index() {
  return (
    <div className="container flex h-screen rounded-lg bg-[#050A44]">
      {/* Left Section */}
      <div className="bg-[#050A44] w-2/5 flex flex-col text-white relative p-5 ">
        {/* Logo */}
        <div className="">
          <img className="w-[180px]" src={logo} alt="Logo" />
        </div>
        {/* Promo Text */}
        <div className="text-inherit ml-3">
          <h1 className="text-3xl font-semibold">50% OFF ON FASHION</h1>
          <p className="my-2 font-semibold text-lg">
            Cloth's, Accessories & More
          </p>
          <p className="text-sm">
            Shop now to find savings on
            <br />
            everything you need
          </p>
        </div>
        {/* Image */}
        <div className="">
          <img
            className="absolute left-[12%] bottom-[0%] w-[230px] ml-10 border-transparent"
            src={customer}
            alt="Customer"
          />
        </div>
      </div>

      {/* Right Section (Signup Form) */}
      <div className="bg-white w-3/5 flex flex-col rounded-lg justify-center items-center">
        <div className="container w-4/5 px-10">
          <h1 className="text-4xl font-bold drop-shadow-2xl text-[#EB268F] mb-4">
            Create Account
          </h1>
          <form className="container  placeholder:text-sm" action="">
            <div className="flex justify-items-center">
              <div className="relative">
                <input
                  className="border border-black outline-none rounded-md ml-0 py-3 px-2 mx-4 w-[15vw] lg:w-[19.4vw] md:w-[15vw]"
                  type="text"
                  placeholder="Firstname"
                />
              </div>
              <div>
                <input
                  className="border border-black rounded-md placeholder:text-sm py-3 px-2 mx-4 w-[15vw] lg:w-[20vw] md:w-[15vw]"
                  type="text"
                  placeholder="Lastname"
                />
              </div>
            </div>
            <div className="container flex flex-col mt-2">
              <input
                className="border py-3 px-2 my-3  border-black rounded-md"
                type="text"
                placeholder="Email"
              />
              <input
                className="border py-3 px-2 my-3 border-black rounded-md"
                type="text"
                placeholder="Password"
              />
              <div>
                <button className="container p-1 py-2 my-3 w-full border rounded-lg bg-[#EB268F] text-white font-semibold">
                  Create Account
                </button>
              </div>
            </div>
          </form>
          <div className="text-sm">
            Already have an account? <Link to={"/customer/login"}>Login</Link>
          </div>
          <div className="flex gap-1 items-center my-5">
            <img className="w-[16em] h-[2px]" src={Line} alt="" />
            <div>or</div>
            <img className="w-[16em] h-[2px]" src={Line} alt="" />
          </div>
          <div className="flex gap-2">
            <button className="border rounded-lg border-black w-full p-2 text-xs flex justify-center items-center gap-3">
              <FaFacebook className="text-lg" />
              <div>Sigup with facebook</div>
            </button>
            <button className="border rounded-lg border-black w-full p-2 text-xs flex justify-center items-center gap-3">
              <FcGoogle className="text-lg" />
              <div>Sigup with google</div>
            </button>
          </div>
        </div>
        <div className="text-[0.6rem] text-center my-4">
          <p>
            You agree to the{" "}
            <span className="text-[#EB268F] font-semibold">
              Luminary Mindset Terms
            </span>{" "}
            and{" "}
            <span className="text-[#EB268F] font-semibold">Privacy Policy</span>
            <br />
            Copyright © 2024 Vibepulse.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;
