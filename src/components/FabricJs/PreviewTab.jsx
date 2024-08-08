import { useState } from "react";
import { FaListUl } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { LiaTapeSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import { TbTruckDelivery } from "react-icons/tb";
import { VscJersey } from "react-icons/vsc";

function PreviewTab() {
  const [previewTab, setPreviewTab] = useState();
  return (
    <div className="bg-white relative">
      <div className="flex text-xs">
        {previewTab && (
          <button
            onClick={() => setPreviewTab("")}
            className="absolute -top-9 right-0 bg-white border border-gray-400 p-3 rounded-t-md"
          >
            <RxCross2 />
          </button>
        )}
        <button
          onClick={() => setPreviewTab("1")}
          style={{ borderBottom: previewTab === "1" && "2px solid black" }}
          className="px-4 flex flex-col items-center border w-2/4 p-2"
        >
          <div></div>
          <div>Terms & Condition</div>
        </button>
        <button
          onClick={() => setPreviewTab("2")}
          style={{ borderBottom: previewTab === "2" && "2px solid black" }}
          className="px-4 flex flex-col items-center border w-2/4 p-2"
        >
          <div></div>
          <div>About This Product</div>
        </button>
      </div>
      {previewTab === "1" && (
        <div className="text-[10px] p-2 m-4 ml-3">
          <ol className="list-decimal space-y-4">
            <li>
              As the product is custom printed, the order cannot be returned,
              exchanged or cancelled.
            </li>
            <li>Ensure images you upload are clear and arent blurry.</li>
            <li>
              Ensure text size is readable, spelled correctly and color stands
              out against background.
            </li>
            <li>Ensure images you upload are clear and arent blurry.</li>
            <li>
              Religious, provocative, political, obscene or copyright content
              will not be.
            </li>
          </ol>
          <div className="opacity-0">
            <ol className="list-decimal space-y-4">
              <li>
                As the product is custom printed, the order cannot be returned,
                exchanged.
              </li>
            </ol>
          </div>
        </div>
      )}
      {previewTab === "2" && (
        <div className="text-[10px] p-2 m-4 ml-1 pt-0">
          <ul className="space-y-2">
            <li className="flex items-center gap-4">
              <FaListUl className="text-lg" />
              <div>
                <h5 className="font-bold">PRODUCT DESCRIPTION</h5>
                <p>Pure Black Customize Over-size T-shirt</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <LiaTapeSolid className="text-xl" />
              <div>
                <h5 className="font-bold">REGULAR FIT</h5>
                <p>Fitted chest and straight on waist down</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <VscJersey className="text-xl" />
              <div>
                <h5 className="font-bold">SINGLE JERSEY</h5>
                <p>Classic, lightweight jersey fabric</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <GiReturnArrow className="text-4xl" />
              <div>
                <h5 className="font-bold">NO RETURNS</h5>
                <p>
                  This customize t-shirt is not returnable, This design is only
                  for you .add description according to you that suitable for
                  your company.{" "}
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <TbTruckDelivery className="text-2xl" />
              <div>
                <h5 className="font-bold">GET BY THIS</h5>
                <p>
                  They say good things take time! Your Custom printed item will
                  ship in 3 to 5 days.
                </p>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default PreviewTab;
