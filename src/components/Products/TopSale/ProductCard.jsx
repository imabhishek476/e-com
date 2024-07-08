import React from "react";

function ProductCard() {

  const shirtIMage =[
    "https://pitamber-ecommerce.netlify.app/static/media/shirt4.ab2aaf5e098c4703af65.png",
    "https://pitamber-ecommerce.netlify.app/static/media/shirt6.87e89a8c31c8d0bd3823.png",
    "https://pitamber-ecommerce.netlify.app/static/media/shirt3.f1206c623516aaca288a.png"
  ]

  return (
    <div className=" rounded-md shadow-lg w-[14vw] m-1 ml-0 bg-gray-50">
      <div className="m-8">
        <img
          className="h-[20vh] bg-transparent mix-blend-multiply transition-transform duration-300 ease-in-out hover:scale-125"
          src={shirtIMage[Math.floor(Math.random() * 3)]}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-start m-3">
        <span className="font-semibold text-xs">Oversize Men's t-shirt</span>
        <span className="font-semibold text-xs">Price: $ 599</span>
        <div className="flex justify-between items-center w-full mr-3 my-2 font-semibold text-xs">
          <div>⭐ 4.8</div>
          <button className="px-3 py-1 border-2 border-black rounded-2xl">Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
