import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";

const paymentImg =[
  "https://pitamber-ecommerce.netlify.app/static/media/master.1e1abd1a74606f8225f7.png",
  "https://pitamber-ecommerce.netlify.app/static/media/paytm.225413f6c6f20e59e0ae.png",
  "https://pitamber-ecommerce.netlify.app/static/media/paypal.bcc085f55d8f1098a357.png",
  "https://pitamber-ecommerce.netlify.app/static/media/phonepay.785855ad629d6af82bb1.png",
]

function index() {
  return (
    <div className=" text-gray-400 bg-slate-800 z-10 p-14 pt-5">
      <div className="flex gap-4 justify-between mx-4 p-8">
        <div className="flex flex-col gap-2">
          <span className="text-lg text-pink-600 font-semibold">
            CUSTOMER SERVICES
          </span>
          <ul className="flex flex-col gap-1 text-sm">
            <li>Contact Us</li>
            <li>Track Order</li>
            <li>Return Order</li>
            <li>Cancel Order</li>
            <br />
            <li>15 Days return policy</li>
            <li>Cash on delivey</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-lg text-pink-600 font-semibold">COMPANY</span>
          <ul className="flex flex-col text-sm">
            <li>About Us </li>
            <li>We're Hiring</li>
            <li>Terms & Conditions </li>
            <li>Privacy Policy</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-lg text-pink-600 font-semibold">
            CONNECT WITH US
          </span>
          <ul className="flex gap-4 text-xl">
            <li>
              <AiFillTwitterCircle />
            </li>
            <li>
              <IoLogoFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
          </ul>

          <br />
          <br />
          <br />

          <div>
          <span className="text-lg text-pink-600">100% Secure PaymentS</span>
          <div className="flex">
            {
              paymentImg?.map((item)=>(
                <img key={item} src={item} className="w-[4vh] object-cover" alt="" />
              ))
            }
          </div>
        </div>
        </div>
      </div>
      <hr className="my-10 mb-5"/>
      <div className="mx-4 flex justify-between p-8 pt-0">
        <div>
          <span className="text-xl text-white font-semibold">Men's Clothing</span>
          <ul className="flex flex-col text-sm mt-3">
            <li> Top Wear</li>
            <li> Men's New Arrivals</li>
            <li> Men's T-shirt</li>
            <li> Men's Hoodies & sweetshirts</li>
            <li> Men's Vests</li>
            <br />
            <li> Oversized T-Shirt</li>
            <li> Men's Kurta</li>
            <li> Men's Polo T-shirt</li>
          </ul>
        </div>
        <div>
          <span className="text-xl text-white font-semibold">Women's Clothing</span>
          <ul className="flex flex-col text-sm mt-3">
            <li> Women's Top Wear</li>
            <li> Women's New Arrivals</li>
            <li> Women's T-shirt</li>
            <li> Women's Hoodies & sweetshirts</li>
            <li> Women's Vests</li>
            <br />
            <li> Oversized T-Shirt</li>
            <li> Women's Kurta</li>
            <li> Women's Polo T-shirt</li>
          </ul>
        </div>
        <div>
          <span className="text-xl text-white font-semibold">MOBILE COVERS</span>
          <ul className="flex flex-col text-sm mt-3">
            <li> Apple</li>
            <li> Samsung</li>
            <li> Realme</li>
            <li> Xiaomi</li>
            <li> Oneplus</li>
            <li> Vivo</li>
            <li> Moto</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default index;
