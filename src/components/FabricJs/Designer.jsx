import { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";
import html2canvas from "html2canvas";
import FrontImage from "../../assets/custom/FrontTshirt.png";
import BackImage from "../../assets/custom/red.png";
import FabricCanvas from "./FabricCanvas";
import TextModal from "./Modal/TextModal";
import { PiFlipHorizontalFill } from "react-icons/pi";
import useCustomStore from "../../app/customStore";

function Designer({
  canvas,
  setCanvas,
  setPreviewUrl,
  previewUrl,
  tshirtDivRef,
  canvasBack,
  setCanvasBack
}) {
  // const [previewUrl, setPreviewUrl] = useState(null);
  // const [show, setShow] = useState(false);
  // const tshirtDivRef = useRef(null);

  const {
    frontFabric,
    backFabric,
    saveFrontFabricState,
    saveBackFabricState,
    loadFrontFabricState,
    loadBackFabricState,
    setCanvasSide,
    canvasSide
  } = useCustomStore();

  useEffect(() => {
    const initCanvas = new fabric.Canvas("fabric-canvas");
    const savedState = loadFrontFabricState();
    if (savedState) {
      initCanvas.loadFromJSON(
        savedState,
        initCanvas.renderAll.bind(initCanvas)
      );
      initCanvas.renderAll;
    }
    setCanvas(initCanvas);
    return () => {
      saveFrontFabricState(initCanvas.toJSON());
      initCanvas.dispose();
    };
  }, [canvasSide === "front"]);
  useEffect(() => {
    const initCanvasBack = new fabric.Canvas("fabric-canvas-back");
    const savedState = loadBackFabricState();
    if (savedState) {
      initCanvasBack.loadFromJSON(
        savedState,
        initCanvasBack.renderAll.bind(initCanvasBack)
      );
      initCanvasBack.renderAll;
    }
    setCanvasBack(initCanvasBack);
    return () => {
      saveBackFabricState(initCanvasBack.toJSON());
      initCanvasBack.dispose();
    };
  }, [canvasSide === "back"]);

  useEffect(() => {
    const handleSelection = (event) => {
      const activeObject = event;
      if (
        activeObject?.selected?.length < 2 &&
        activeObject.selected[0].type === "i-text"
      ) {
        // setShow(true);
      } else {
        // setShow(false);
      }
    };

    document.addEventListener(
      "keydown",
      (e) => {
        return e.code == "Delete"
          ? canvas.remove(canvas.getActiveObject())
          : false;
      },
      false
    );

    canvas?.on("selection:created", handleSelection);
    canvas?.on("selection:cleared", handleSelection);
    canvas?.on("selection:updated", handleSelection);
    return () => {
      canvas?.off("selection:created", handleSelection);
      canvas?.off("selection:updated", handleSelection);
    };
  }, [canvas]);

  return (
    <>
      <div id="backgroundpicture" style={{ position: "relative" }}>
        <div
          name="Front"
          ref={tshirtDivRef}
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
            </>
          )}
          <FabricCanvas canvasSide={canvasSide} />
        </div>
        <div className="absolute top-0 right-0">
          <button
            onClick={() =>
              setCanvasSide(canvasSide === "back" ? "front" : "back")
            }
          >
            <PiFlipHorizontalFill className="text-4xl" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Designer;
