import React from "react";

function mobile() {
  return (
    <div className="w-[40%] h-[500px] bg-black rounded-lg my-[160px]">
      <div className="p-10">
        <div className="text-xl">
          Get up to <span className="text-2xl text-red-800">25% OFF</span>
        </div>
        <div className="text-4xl">
          <span className="font-bold">All New Devices</span> Collection
        </div>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
          officiis veniam at ut adipisicing elit.
        </p>
        <div className="my-10">
          <button className="bg-white text-black p-4 py-3 rounded-full font-semibold">
            Start Shopping
          </button>
        </div>
      </div>
      <div className="">
        <img
          className="object-contain h-[450px]"
          src="https://raw.githubusercontent.com/imabhishek476/images/main/mobileCut.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default mobile;
