import { HiArrowLongRight } from "react-icons/hi2";

export default function HeroCard({ title , color, img}) {
  return (
    <div className={`shadow-md rounded-xl bg-${color} shadow-gray-400 my-4 mx-2 flex w-full bg-cover h-[35vh] md:h-[90vh] lg:h-[35vh]`}
    >
      <div className="flex flex-col m-3 mr-0 mt-0 py-4 text-[#050A44]">
        <span style={{filter:"drop-shadow(0px 3px 1.8px black)"}} className="font-semibold text-ellipsis text-xl">{title}</span>
        <div>
          <span className="text-md">Starting at <span className="font-bold">₹</span> 1099</span>
          <hr className="border-t-[3px] rounded-full mt-3 border-black w-[10vw]" />
          <a href="#" className="flex items-center gap-2 mt-4 cursor-pointer">
            <span className="text-sm">Shop it now</span>
            <span>
              <HiArrowLongRight />
            </span>
          </a>
        </div>
      </div>
      <div className="flex " style={{filter: color==="[#8DB8CB]" && "drop-shadow(-3px 0px 20px #2370a6"}}>
        <img className="" src={img} alt="" />
      </div>
    </div>
  );
}
