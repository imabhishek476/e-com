import React from "react";
import ProductCard from "./ProductCard";

function index() {
  return (
    <div className=" text-black">
      <div className="m-4">
        <span className="text-xl font-semibold">Top sale</span>
        {/* <div className="flex overflow-x-scroll scrollbar-hidden"> */}
          <div className="flex flex-wrap gap-8">
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
