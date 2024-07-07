import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiArrowLongRight } from "react-icons/hi2";

export default function HeroCard({ title , color, img}) {
  return (
    <div className={`py-4 w-[290px] h-[180px] bg-${color}-400 rounded-md m-4 flex`}>
      <div className="flex flex-col m-3 mt-0">
        <span className="text-xl drop-shadow-3xl text-ellipsis">{title}</span>
        <div>
          <span>Starting at Rs: 1099</span>
          <hr className="border-t-4 mt-3 border-black w-[160px]" />
          <div className="flex items-center gap-2 mt-4">
            <span>Shop it now</span>
            <span>
              <HiArrowLongRight />
            </span>
          </div>
        </div>
      </div>
      <div>
        <img
            className="h-[160px] w-[130px] bg-transparent mix-blend-multiply"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
}
