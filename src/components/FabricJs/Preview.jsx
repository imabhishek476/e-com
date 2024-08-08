import { useState } from "react";
import { PiFlipHorizontalFill } from "react-icons/pi";
import useCustomStore from "../../app/customStore";

function Preview({ FrontImage, BackImage}) {
  const [canvasSide, setCanvasSide] = useState("front");
  const {frontPreview, backPreview} = useCustomStore()


  return (
    <div id="backgroundpicture" style={{ position: "relative" }}>
      <div
        className=""
        style={{ position: "relative", backgroundColor: "frontPreviewImg" }}
      >
        {canvasSide === "front" && (
          <div id="frontPreviewImg">
            <img
              id=""
              className="object-cover w-full"
              src={FrontImage}
              alt="FrontImage"
            />
            <div
              className="w-full absolute top-[52px] left-[98px]"
            >
              {/* <img
                src={frontPreview}
                width={160}
                height={280}
                className="object-cover"
              /> */}
              <div className="w-[30px] h-[30px]" dangerouslySetInnerHTML={{ __html: frontPreview }} />
            </div>
          </div>
        )}
        {canvasSide === "back" && (
          <div id="backPreviewImg">
            <img
              id=""
              className="object-cover w-full"
              src={BackImage}
              alt="BackImage"
            />
            <div
              className="w-full absolute top-[52px] left-[98px]"
            >
              {/* <img
                src={backPreview}
                width={160}
                height={280}
                className="object-cover"
              /> */}
              <div className="w-[30px] h-[30px]" dangerouslySetInnerHTML={{ __html: backPreview }} />
            </div>
          </div>
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
