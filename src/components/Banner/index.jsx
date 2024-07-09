import React from "react";
import Shoes from "./Shoes";
import Sunglasses from "./Sunglasses";
import Bags from "./Bags";
import Sale from "./sale";
import Mobile from "./mobile";
import CameraCard from "../Products/Camers.jsx/CameraCard";

function index() {
  return (
    <div className="container text-white">
      <div className="flex justify-evenly gap-1">
        <Shoes />
        <div className="flex flex-col gap-7">
          <Sunglasses />
          <Bags />
        </div>
      </div>
      <div className="ml-6">
        <Sale/>
      </div>
      <div className="container w-[96%] flex justify-around gap-1 ml-5">
        <Mobile/>
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-6 gap-3 place-items-center">
        <CameraCard/>
        <CameraCard/>
        <CameraCard/>
        <CameraCard/>
        <CameraCard/>
        <CameraCard/>
        </div>
      </div>
    </div>
  );
}

export default index;
