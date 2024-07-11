import React from "react";
import ProductCard from "./ProductCard";
import BlackShortSleeveDress from "../../../assets/images/home/black-short-sleeve-dress.png"
import LightBlueJeans from "../../../assets/images/home/light-blue-jeans.png"
import RayBan from "../../../assets/images/home/ray-ban.png"
import BlackCoat from "../../../assets/images/home/black-coat.png"

// black-short-sleeve-dress
const ProductCategory =[
  {
    id: 1,
    type: "Black Short Sleeve Dress",
    price: "$199",
    image: BlackShortSleeveDress,
  },
  {
    id: 2,
    type: "Black Coat Cosole",
    price: "$250",
  image: BlackCoat,
  },
  {
    id: 3,
    type: "Women Light Blue Jeans",
    price: "$250",
    image: LightBlueJeans,
  },
  {
    id: 4,
    type: "Ray Ban Glasses",
    price: "$90",
    image: RayBan,
  },
  
  // {
  //   id: 5,
  //   type: "Shoes",
  //   price: "$2589",
  //   image: "https://pitamber-ecommerce.netlify.app/static/media/shose.644f7932ea65eb193092.png",
  // },
]

function index() {
  return (
    <div className=" text-black">
      <div className="m-4">
        <span className="text-3xl text-[#050A44] font-semibold">Our New Product</span>
          <div className="flex justify-around flex-nowrap gap-2 my-4">
            {
              ProductCategory && ProductCategory?.map((item)=>(
                  <ProductCard key={item.id} img={item.image} price={item.price} category={item.type}/>
              ))
            }
          </div>
          <div className="flex justify-around flex-nowrap gap-2 my-4">
            {
              ProductCategory && ProductCategory?.map((item)=>(
                  <ProductCard key={item.id} img={item.image} price={item.price} category={item.type}/>
              ))
            }
          </div>
          <div className="flex justify-around flex-nowrap gap-2 my-4">
            {
              ProductCategory && ProductCategory?.map((item)=>(
                  <ProductCard key={item.id} img={item.image} price={item.price} category={item.type}/>
              ))
            }
          </div>
        </div>
    </div>
  );
}

export default index;
