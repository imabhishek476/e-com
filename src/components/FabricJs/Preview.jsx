import { useState } from "react"
import { PiFlipHorizontalFill } from "react-icons/pi"

function Preview({ FrontImage, BackImage}) {
    const [canvasSide, setCanvasSide] = useState('front')
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
              {/* <FabricCanvas canvasSide={canvasSide} /> */}
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
              {/* <FabricCanvas canvasSide={canvasSide} /> */}
            </>
          )}
        </div>
        <div
          className="absolute top-0 right-0"
        >
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
  )
}

export default Preview