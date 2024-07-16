import Shoes from "./Shoes";
import Sunglasses from "./Sunglasses";
import Bags from "./Bags";
import Sale from "./sale";
import Mobile from "./mobile";
import CameraCard from "../Products/Camers.jsx/CameraCard";

function index({ page }) {
  return (
    <div className="text-white my-4">
      <div className="flex mx-4 gap-5">
        <Shoes />
        <div className="flex flex-col justify-between w-[29vw]">
          <Sunglasses />
          <Bags />
        </div>
      </div>
      {page !== "Women" && (
        <div className="m-4">
          <Sale />
        </div>
      )}
      {page !== "Women" && (
        <div className="w-[96%] flex justify-around gap-1 ml-5">
          <Mobile />
          <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-6 gap-3 place-items-center">
            <CameraCard />
            <CameraCard />
            <CameraCard />
            <CameraCard />
            <CameraCard />
            <CameraCard />
          </div>
        </div>
      )}
    </div>
  );
}

export default index;
