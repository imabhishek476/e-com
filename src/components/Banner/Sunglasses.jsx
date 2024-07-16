import React from "react";
import glass from "../../assets/images/home/bannerGlasses.png";

function Sunglasses() {
  return (
    <div className="h-[47vh] bg-[#80CDE1] rounded-lg bg-cover relative shadow-xl">
      <div className="absolute bottom-0 left-0">
        <img className="w-[18vw]" src={glass} alt="" />
      </div>
      <div className="px-6 py-1 bg-pink-600 absolute top-4 right-4 rounded-xl">
        New
      </div>
      <div className="mt-2 px-5 flex flex-col gap-20">
        <div>
          <div className="text-3xl font-semibold text-gray-800">Designer</div>
          <div className="text-5xl font-semibold text-blue-950">Sunglasses</div>
        </div>

        <div className="text-end mt-4">
          <button className="bg-blue-950 sm:px-8 px-5  sm:py-3 py-2  font-semibold hover:bg-blue-900 text-white rounded-lg">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sunglasses;
