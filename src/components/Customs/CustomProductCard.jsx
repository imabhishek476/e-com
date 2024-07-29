import React from "react";
import customImg from "../../assets/custom/CustomizableTshirt.png";

function CustomProductCard() {
  return (
    <div className="">
      <div className="rounded-lg">
        <img src={customImg} alt="" />
      </div>
      <div className="m-1">
        <p className="text-sm text-gray-500 font-sans">Men's Green Customizable T-shirt</p>
        <div className="flex gap-2">
          <h5 className="text-[#050A44] font-semibold">Price: $645{" "}</h5>
          <div className="border-2 border-gray-500 text-gray-500 px-4 rounded-lg"> 100% Cotton</div>
        </div>
      </div>
    </div>
  );
}

export default CustomProductCard;
