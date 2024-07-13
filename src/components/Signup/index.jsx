import React, { useEffect, useState } from "react";
import logo from "../../assets/images/signup/logo.png";
import customer from "../../assets/images/signup/customer.png";
import Line from "../../assets/images/signup/Line.png";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import TermsModal from "./Terms&Condition";
import { useRef } from 'react';
import Cookies from "js-cookie";
import EventModal from "./EventModal";
import Loading from '../Loading/index'
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../../api/googleAuth";

function Index() {
  const [loadingModal, setLoadingModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  const [checked, setChecked] = useState(false)
  const [SignupData, setSignupData] = useState({
    firstname: null,
    lastname: null,
    email: null,
    password: null
  });
  const form = useRef()

  const handleRegisterClick = (event) => {
    event.preventDefault();
    console.log(event)
    setSignupData({
      ...SignupData,
      firstname: event.target[0].value,
      lastname: event.target[1].value,
      email: event.target[2].value,
      password: event.target[3].value
    })
    setShowModal(true);
    form.current.reset()
  };

  const signup = useGoogleLogin({
    onSuccess: async (Response) => {
      try {
        setLoadingModal(true)
        const data = await googleAuth(Response);
        console.log(data);
        setLoadingModal(false)
        window.location.replace("/");
      } catch (error) {
        console.log(error);
      }
    },
    onError: (error) => {
      setLoadingModal(false)
      console.log(error);
    }

  });


  useEffect(()=>{
    const cookie = Cookies.get('accessToken')
    if(cookie){
      window.location.replace('/')
    }
  },[])

  return (
    <>
      <Loading showModal={loadingModal}/>
      <EventModal showEventModal={showEventModal} setShowEventModal={setShowEventModal}/>
      <TermsModal showModal={showModal} setShowModal={setShowModal} UserData={SignupData} setChecked={setChecked} setShowEventModal={setShowEventModal}/>
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
            <form
              className="container  placeholder:text-sm"
              onSubmit={handleRegisterClick}
              ref={form}
            >
              <div className="flex justify-items-center">
                <div className="relative">
                  <input
                    className="border border-black outline-none rounded-md ml-0 py-3 px-2 mx-4 w-[15vw] lg:w-[19.4vw] md:w-[15vw]"
                    type="text"
                    required
                    placeholder="Firstname"
                  />
                </div>
                <div>
                  <input
                    className="border border-black rounded-md placeholder:text-sm py-3 px-2 mx-4 w-[15vw] lg:w-[20vw] md:w-[15vw]"
                    type="text"
                    required
                    placeholder="Lastname"
                  />
                </div>
              </div>
              <div className="container flex flex-col mt-2">
                <input
                  className="border py-3 px-2 my-3  border-black rounded-md"
                  type="email"
                  required
                  placeholder="Email"
                />
                <input
                  className="border py-3 px-2 my-3 border-black rounded-md"
                  type={showPassword? "text": "password"}
                  required
                  minLength={8}
                  placeholder="Password"
                />
                <div className="flex items-center gap-2 text-xs">
                <input
                  type="checkbox"
                  className="form-checkbox border-2 border-[#EB268F] rounded-sm"
                  style={{ borderColor: "pink" }}
                  // checked={isChecked3}
                  onChange={(e) => setShowPassword(e.target.checked)}
                />
                <span>{showPassword ? "Hide" : "Show"} password</span>
              </div>
                <div>
                  <button className="container p-1 py-2 my-3 w-full border rounded-lg bg-[#EB268F] text-white font-semibold">
                    Create Account
                  </button>
                </div>
              </div>
            </form>
            <div className="text-sm">
              Already have an account?{" "}
              <Link className="text-blue-900" to={"/customer/login"}>
                Login
              </Link>
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
              <button onClick={() => signup()} className="border rounded-lg border-black w-full p-2 text-xs flex justify-center items-center gap-3">
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
              <span className="text-[#EB268F] font-semibold">
                Privacy Policy
              </span>
              <br />
              Copyright © 2024 Vibepulse.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
