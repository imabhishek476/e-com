import React from "react";

function ProductCard() {
  return (
    <div className=" rounded-md shadow-xl w-[14vw] m-3">
      <div className="m-3 ml-10">
        <img
          className="h-[100px] bg-transparent mix-blend-multiply"
          src="https://pitamber-ecommerce.netlify.app/static/media/shirt4.ab2aaf5e098c4703af65.png"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-start m-3">
        <span>Oversize Men's t-shirt</span>
        <span>Price: $ 599</span>
        <div className="flex justify-between w-full mr-3 my-2 ">
          <div>⭐ 4.8</div>
          <button className="px-3 py-1 border-2 border-black rounded-2xl">Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
