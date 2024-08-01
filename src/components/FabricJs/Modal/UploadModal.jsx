import { RxCross2 } from "react-icons/rx";
import * as fabric from "fabric";
import useCustomStore from "../../../app/customStore";
import { IoImageOutline } from "react-icons/io5";
import { RiImage2Fill } from "react-icons/ri";
import { useState } from "react";

function UploadModal({ canvas, canvasBack, setModal }) {
  const { canvasSide } = useCustomStore();
  const [isChecked, setIsChecked] = useState(false);

  const handleImageUpload = (e) => {
    const reader = new FileReader();
    if (canvasSide === "front") {
      reader.onload = (event) => {
        let imgObj = new Image();
        imgObj.src = event.target.result;
        console.log(event.target.result);
        imgObj.onload = function () {
          let img = new fabric.FabricImage(imgObj);
          // console.log(img)
          // console.log(canvas)
          img.scaleToHeight(90);
          img.scaleToWidth(90);
          canvas.centerObject(img);
          canvas.add(img);
          canvas.renderAll();
        };
      };
    } else {
      reader.onload = (event) => {
        let imgObj = new Image();
        imgObj.src = event.target.result;
        console.log(event.target.result);
        imgObj.onload = function () {
          let img = new fabric.FabricImage(imgObj);
          // console.log(img)
          // console.log(canvas)
          img.scaleToHeight(90);
          img.scaleToWidth(90);
          canvasBack.centerObject(img);
          canvasBack.add(img);
          canvasBack.renderAll();
        };
      };
    }

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const closeModal = () => {
    setModal("");
  };

  return (
    <div id="myModal" className="fixed bottom-0 bg-white shadow-lg p-4 z-50 w-[24em]">
      <button
        onClick={closeModal}
        className="absolute -top-8 right-0 bg-white border border-gray-400 p-2"
      >
        <RxCross2 />
      </button>
      <div style={{border: '1px dashed black'}} className="flex flex-col gap-4 p-4">
        <div className="flex w-[384px] justify-between items-center text-sm font-semibold">
          <div className="flex gap-2 justify-center items-center text-[10px]">
            <div>
              <RiImage2Fill className="text-4xl" />
            </div>
            <div className="">
              <p className="text-[12px]">
                Upload an Image to place it on product
              </p>
              <p className="">Max.size should be 10 MB</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center text-[10px]">
          <div>
            <input
              id="terms"
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            {/* <label htmlFor="terms">
              please
            </label> */}
          </div>
          <div className="mb-1">
            please ensure you are adhering the T&C of <span className="text-pink-600">vibepulse Upload Policy.</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
            <label style={{ filter: "drop-shadow(4px 4px 1px black)" }} className="cursor-pointer w-full bg-pink-600 text-center py-1 rounded-md" htmlFor="fileUpload">
              Proceed
              <input
                disabled={!isChecked}
                id="fileUpload"
                type="file"
                maxLength="60"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
        </div>
      </div>
    </div>
  );
}

export default UploadModal;
