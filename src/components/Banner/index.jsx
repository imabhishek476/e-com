import React from "react";
import Shoes from "./Shoes";
import Sunglasses from "./Sunglasses";
import Bags from "./Bags";
import Sale from "./sale";
import Mobile from "./mobile";

function index() {
  return (
    <div className=" text-white my-6 ml-6">
      <div className="flex gap-4">
        <Shoes />
        <div className="flex flex-col gap-7">
          <Sunglasses />
          <Bags />
        </div>
      </div>
      <div>
        <Sale/>
      </div>
      <div>
        <Mobile/>
      </div>
    </div>
  );
}

export default index;
