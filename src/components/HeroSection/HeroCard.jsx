import { HiArrowLongRight } from "react-icons/hi2";

export default function HeroCard({ title , color, img}) {
  return (
    <div className={`relative shadow-lg border rounded-xl bg-${color} shadow-gray-400 m-4 flex flex-row-reverse w-full bg-cover h-[35vh] md:h-[90vh] lg:h-[35vh]`}
    >
      <div className="flex ">
        <img className="" src={img} alt="" />
      </div>
      <div className="flex flex-col m-3 mt-0 py-4">
        <span className="font-semibold drop-shadow-2xl text-ellipsis text-inherit text-xl">{title}</span>
        <div>
          <span className="text-md">Starting at Rs: 1099</span>
          <hr className="border-t-[3px] rounded-full mt-3 border-black w-[10vw]" />
          <a href="#" className="flex items-center gap-2 mt-4 cursor-pointer">
            <span className="text-sm">Shop it now</span>
            <span>
              <HiArrowLongRight />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
