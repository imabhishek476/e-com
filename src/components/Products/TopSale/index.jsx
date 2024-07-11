import React from "react";
import ProductCard from "./ProductCard";

function index() {
  return (
    <div className=" text-black">
      <div className="m-4">
        <span className="text-3xl text-[#050A44] font-semibold">Top sale</span>
        {/* <div className="flex overflow-x-scroll scrollbar-hidden"> */}
          <div className="flex justify-around flex-wrap gap-2 my-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default index;
