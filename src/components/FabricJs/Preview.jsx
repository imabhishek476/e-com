import { useState } from "react";
import { PiFlipHorizontalFill } from "react-icons/pi";
import red from '../../assets/custom/red.png'
import useCustomStore from "../../app/customStore";

function Preview({ FrontImage, BackImage }) {
  const [canvasSide, setCanvasSide] = useState("front");
  const {frontPreview, backPreview} = useCustomStore()
  console.log(frontPreview, backPreview)
  return (
    <div id="backgroundpicture" style={{ position: "relative" }}>
      <div
        name="Front"
        //   ref={tshirtDivRef}
        className=""
        style={{ position: "relative", backgroundColor: "transparent" }}
      >
        {/* {previewUrl &&(
            <img className="object-cover w-full" src={previewUrl} alt="" srcset="" />
          )} */}
        {canvasSide === "front" && (
          <>
            <img
              id=""
              className="object-cover w-full"
              src={FrontImage}
              alt="FrontImage"
            />
            <div
              className="w-full absolute top-[52px] left-[98px]"
            >
              <img
                src={frontPreview}
                width={160}
                height={280}
                className="object-cover"
              />
            </div>
          </>
        )}
        {canvasSide === "back" && (
          <>
            <img
              id=""
              className="object-cover w-full"
              src={BackImage}
              alt="BackImage"
            />
            <div
              className="w-full absolute top-[52px] left-[98px]"
            >
              <img
                src={backPreview}
                width={160}
                height={280}
                className="object-cover"
              />
            </div>
          </>
        )}
      </div>
      <div className="absolute top-0 right-0">
        <button
          className="border p-1 rounded-lg"
          onClick={() =>
            setCanvasSide(canvasSide === "back" ? "front" : "back")
          }
        >
          <PiFlipHorizontalFill
            style={{
              WebkitTransform: canvasSide === "back" && "scaleX(-1)",
              transform: canvasSide === "back" && "scaleX(-1)"
            }}
            className="text-4xl"
          />
        </button>
      </div>
    </div>
  );
}

export default Preview;
