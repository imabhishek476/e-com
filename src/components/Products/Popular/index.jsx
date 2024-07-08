import React from "react";
import ProductCard from "./ProductCard";

function index() {
  return (
    <div className=" text-black">
      <div className="m-4">
        <span className="text-xl font-semibold">Most Popular products</span>
        <div className="flex overflow-x-scroll scrollbar-hidden">
          <div className="flex justify-around flex-nowrap gap-2 m-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
