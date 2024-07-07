import React from "react";

function ProductCard() {
  return (
    <div className=" rounded-md shadow-xl w-[180px] m-3">
      <div className="m-3 ml-10">
        <img
          className="h-[100px] bg-transparent mix-blend-multiply"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOdY0jmV5Nxd3zBXdctTCN7TSvWbIoVc6o0A&s"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-start m-3">
        <span>Oversize Men's t-shirt</span>
        <span>Price: $ 599</span>
        <span>⭐ 4.8</span>
      </div>
    </div>
  );
}

export default ProductCard;
