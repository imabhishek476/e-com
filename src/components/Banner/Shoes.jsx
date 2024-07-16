import React from "react";
import Shoe from "../../assets/images/home/bannerShoes.png";

function Shoes() {
  return (
    <div className="w-[50vw] h-[97vh] bg-[#EAEAEA] rounded-lg bg-cover relative flex flex-row-reverse shadow-xl">
      <div className="px-6 py-1 bg-pink-600 absolute top-4 right-4 rounded-xl">
        New
      </div>
      <div className="absolute top-0 left-0">
        <img src={Shoe} alt="" />
      </div>
      <div className="text-right mt-auto mb-10 mr-5 space-y-4">
        <div className="text-4xl font-semibold text-gray-800">
          Shoes Collection
        </div>
        <div className="sm:text-6xl text-3xl font-semibold text-blue-950">
          Up to <br /> 50% <br /> Off
        </div>
        <div>
          <button className="bg-blue-950 sm:px-8 px-5  sm:py-3 py-2 font-semibold hover:bg-blue-900 text-white rounded-lg">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Shoes;
