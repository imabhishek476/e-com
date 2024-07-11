import React from "react";
import ProductCard from "./ProductCard";

const ProductCategory =[
  {
    id: 1,
    type: "Men",
    itemTotal: "2 items",
    image: "https://pitamber-ecommerce.netlify.app/static/media/ShopM.ec64ecb5e18ba3b8f96a.png",
  },
  {
    id: 2,
    type: "Women",
    itemTotal: "84 items",
    image: "https://pitamber-ecommerce.netlify.app/static/media/ShopW.8f7ffd89cd7d4568ab5f.png",
  },
  {
    id: 3,
    type: "Vintage",
    itemTotal: "24 items",
    image: "https://pitamber-ecommerce.netlify.app/static/media/Vintages.91aedfcc43ace3239527.png",
  },
  {
    id: 4,
    type: "Bags",
    itemTotal: "10 items",
    image: "https://pitamber-ecommerce.netlify.app/static/media/Bangs.8b76d8d98f0e4710386f.png",
  },
  {
    id: 5,
    type: "Shoes",
    itemTotal: "9 items",
    image: "https://pitamber-ecommerce.netlify.app/static/media/shose.644f7932ea65eb193092.png",
  },
  {
    id: 2,
    type: "Women",
    itemTotal: "84 items",
    image: "https://pitamber-ecommerce.netlify.app/static/media/ShopW.8f7ffd89cd7d4568ab5f.png",
  },
]

function index() {
  return (
    <div className=" text-black">
      <div className="m-4">
        <span className="text-3xl text-[#050A44] font-semibold">Shop By Categories</span>
        <div className="flex overflow-x-scroll scrollbar-hidden">
          <div className="flex justify-around flex-nowrap gap-2 my-4">
            {
              ProductCategory && ProductCategory?.map((item)=>(
                  <ProductCard key={item.id} img={item.image} item={item.itemTotal} category={item.type}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
