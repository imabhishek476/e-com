import { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";
import html2canvas from "html2canvas";
import FrontImage from "../../assets/custom/FrontTshirt.png";
import BackImage from "../../assets/custom/red.png";
import FabricCanvas from "./FabricCanvas";
import { PiFlipHorizontalFill } from "react-icons/pi";
import useCustomStore from "../../app/customStore";
import {
  deleteObject,
  deleteObjectForBack,
  renderIcon,
  renderIconForBack
} from "./DeleteControl";

function Designer({
  canvas,
  setCanvas,
  setPreviewUrl,
  previewUrl,
  tshirtDivRef,
  canvasBack,
  setCanvasBack,
  modal
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

    initCanvas.on("object:added", (e) => {
      const obj = e.target;
      obj.controls.deleteControl = new fabric.Control({
        x: 0.5,
        y: -0.5,
        offsetY: 1,
        cursorStyle: "pointer",
        mouseUpHandler: deleteObject,
        render: renderIcon,
        cornerSize: 18
      });
      obj.set({
        hasControls: true,
        cornerSize: 8,
        cornerColor: "white",
        cornerStyle: "rect",
        cornerStrokeColor: "white",
        transparentCorners: false
      });
    });

    // Define keydown handler function
    const handleKeyDown = (e) => {
      const activeObject = initCanvas.getActiveObject();
      console.log(activeObject);
      activeObject.controls.deleteControl.visible = true;
      initCanvas.renderAll();
      if (/^[a-zA-Z0-9]$/.test(e.key)) {
        e.preventDefault(); // Disable character keys
      }
      // Add more conditions to handle other specific keys if needed
    };
    // Function to bind keydown event to canvas
    initCanvas.upperCanvasEl.addEventListener("keydown", handleKeyDown);
    // Function to unbind keydown event from canvas
    initCanvas.upperCanvasEl.removeEventListener("keydown", handleKeyDown);

    // Bind keydown event to the canvas
    return () => {
      saveFrontFabricState(initCanvas.toJSON());
      initCanvas.dispose();
    };
  }, [canvasSide]);
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
    initCanvasBack.on("object:added", (e) => {
      const obj = e.target;
      obj.controls.deleteControl = new fabric.Control({
        x: 0.5,
        y: -0.5,
        offsetY: 1,
        cursorStyle: "pointer",
        mouseUpHandler: deleteObjectForBack,
        render: renderIconForBack,
        cornerSize: 18
      });
      obj.set({
        hasControls: true,
        cornerSize: 8,
        cornerColor: "white",
        cornerStyle: "rect",
        cornerStrokeColor: "white",
        transparentCorners: false
      });
    });
    return () => {
      saveBackFabricState(initCanvasBack.toJSON());
      initCanvasBack.dispose();
    };
  }, [canvasSide]);

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
        <div
          style={{ display: modal && "none" }}
          className="absolute top-0 right-0"
        >
          <button
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
    </>
  );
}

export default Designer;
