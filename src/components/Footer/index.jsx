import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";

function index() {
  return (
    <div className="absolute top-[200rem] left-0 text-white w-[100%] bg-gray-900 z-10 p-10">
      <div className="flex gap-4 justify-between mx-4">
        <div className="flex flex-col gap-2">
          <span className="text-lg text-pink-600">Customer service</span>
          <ul className="flex flex-col gap-1 text-sm">
            <li>Contact Us</li>
            <li>Track Order</li>
            <li>Return Order</li>
            <li>Cancel Order</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-lg text-pink-600">Company</span>
          <ul className="flex flex-col gap-1 text-sm">
            <li>Contact Us</li>
            <li>Track Order</li>
            <li>Return Order</li>
            <li>Cancel Order</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-lg text-pink-600">connect with us</span>
          <ul className="flex gap-4 text-lg">
            <li><AiFillTwitterCircle /></li>
            <li><IoLogoFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaTwitter /></li>

          </ul>
        </div>
      </div>

      <div className="flex justify-between mt-4 mx-4">
        <div className="text-sm flex flex-col">
          <span>15 Days return policy</span>
          <span>Cash on delivey</span>
        </div>
        <div>
          <span className="text-lg text-pink-600">100% Secure PaymentS</span>
          <div>
            <span className="text-sm">X</span>
            <span className="text-sm">Y</span>
            <span className="text-sm">Z</span>
          </div>
        </div>
      </div>
      <hr className="my-6" />
      <div className="mx-4 flex justify-between">
        <div>
            <span className="text-xl">Men's Clothing</span>
            <ul className="flex flex-col gap-1 text-sm mt-3">
                <li> Top Wear</li>
                <li> Men's New Arrivals</li>
                <li> Men's T-shirt</li>
                <li> Men's Hoodies & sweetshirts</li>
                <li> Men's Vests</li>
            </ul>
        </div>
        <div>
            <span className="text-xl">Women's Clothing</span>
            <ul className="flex flex-col gap-1 text-sm mt-3">
                <li> Top Wear</li>
                <li> Women's New Arrivals</li>
                <li> Women's T-shirt</li>
                <li> Women's Hoodies & sweetshirts</li>
                <li> Women's Vests</li>
            </ul>
        </div>
        <div>
            <span className="text-xl">MOBILE COVERS</span>
            <ul className="flex flex-col gap-1 text-sm mt-3">
                <li> Brands</li>
                <li> Apple</li>
                <li> Realme</li>
                <li> Samsung</li>
                <li> Xiaomi</li>
                <li> Moto</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default index;
