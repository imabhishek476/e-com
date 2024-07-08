import React from "react";
import Shoes from "./Shoes";
import Sunglasses from "./Sunglasses";
import Bags from "./Bags";
import Sale from "./sale";
import Mobile from "./mobile";
import CameraCard from "../Products/Camers.jsx/CameraCard";

function index() {
  return (
    <div className=" text-white my-6 ml-3 mr-5">
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
      <div className="flex">
        <Mobile/>
        <CameraCard/>
      </div>
    </div>
  );
}

export default index;
