import React from "react";
import customImg from "../../assets/custom/CustomizableTshirt.png";
import { useNavigate } from "react-router-dom";

function CustomProductCard({productImg, productName, discountPrice, url}) {
  const navigate = useNavigate()
  return (
    <div className="cursor-pointer">
      <div onClick={()=>navigate(`/custom-design/${url}`)} className="rounded-lg">
        <img src={productImg} alt="product-image"/>
      </div>
      <div className="m-1">
        <p className="text-sm text-gray-500 font-sans">{productName}</p>
        <div className="flex gap-2">
          <h5 className="text-[#050A44] font-semibold">Price: ₹{discountPrice}{" "}</h5>
          <div className="border-2 border-gray-500 text-gray-500 px-4 rounded-lg"> 100% Cotton</div>
        </div>
      </div>
    </div>
  );
}

export default CustomProductCard;
