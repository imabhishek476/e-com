import { RxCross2 } from "react-icons/rx";
import * as fabric from "fabric";
import useCustomStore from "../../../app/customStore";

function UploadModal({ canvas, canvasBack, setModal }) {
  const { canvasSide } = useCustomStore();

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
    }else{
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
    <div id="myModal" className="fixed bottom-0 bg-white shadow-lg p-4 z-50">
      <button
        onClick={closeModal}
        className="absolute -top-10 right-0 bg-white p-4"
      >
        <RxCross2 />
      </button>
      <div className="flex w-[384px] justify-between items-center text-sm">
        <p className="">Upload an Image to place it on product</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="w-full">
          <input
            type="file"
            maxLength="60"
            onChange={handleImageUpload}
            className="w-full mt-2 p-2 rounded focus:border-none"
          />
        </div>

        {/* <button className="confirm mt-2 bg-blue-500 text-white py-2 px-4 rounded">
          ✔
        </button> */}
      </div>
    </div>
  );
}

export default UploadModal;
