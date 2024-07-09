import React from "react";

function mobile() {
  return (
    <div className="w-[40%] h-[120vh] bg-black rounded-lg">
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
      <div className="w-[31vw] rounded-lg">
        <img
          className="object-cover w-[32.5vw] h-[50vh] rounded-l"
          src="https://raw.githubusercontent.com/imabhishek476/images/main/mobileCut.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default mobile;
