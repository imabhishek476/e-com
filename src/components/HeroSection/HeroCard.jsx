import { HiArrowLongRight } from "react-icons/hi2";

export default function HeroCard({ title , color, img}) {
  return (
    <div className={`relative shadow-lg rounded-xl ${color} shadow-gray-400 m-4 flex w-full bg-cover h-[35vh] md:h-[90vh] lg:h-[34vh]`}
    >
      <div className="flex flex-col p-4 text-[#050A44] font-normal">
        <span style={{filter:"drop-shadow(1px 3px 1px gray)"}} className="font-semibold text-ellipsis text-[4vh]">{title}</span>
        <div className="">
          <span className="text-[3vh]">Starting at <span className="font-bold">₹</span> 1099</span>
          <hr className="border-t-[3px] rounded-full mt-3 border-black w-[10vw]" />
          <a href="#" className="flex items-center gap-2 mt-4 cursor-pointer">
            <span className="text-[2.5vh]">Shop it now</span>
            <span>
              <HiArrowLongRight />
            </span>
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 flex h-[35.5vh]" style={{filter: color==="[#8DB8CB]" && "drop-shadow(-3px 0px 20px #2370a6"}}>
        <img className="object-contain" src={img} alt="" />
      </div>
    </div>
  );
}
