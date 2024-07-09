import { HiArrowLongRight } from "react-icons/hi2";

export default function HeroCard({ title , color, img}) {
  return (
    <div className={`py-4 relative shadow-lg border rounded-md shadow-gray-400 m-4 flex w-full bg-cover h-[35vh] md:h-[90vh] lg:h-[38vh]`} style={{backgroundImage:`url(${img})`}}>
      <div className="flex flex-col m-3 mt-0">
        <span className="text-lg font-semibold drop-shadow-3xl text-ellipsis">{title}</span>
        <div>
          <span>Starting at Rs: 1099</span>
          <hr className="border-t-[3px] rounded-full mt-3 border-black w-[10vw]" />
          <a href="#" className="flex items-center gap-2 mt-4 cursor-pointer">
            <span>Shop it now</span>
            <span>
              <HiArrowLongRight />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
