import { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";
import html2canvas from "html2canvas";
import FrontImage from "../../assets/custom/FrontTshirt.png";
import BackImage from "../../assets/custom/BackTshirt.png";
import FabricCanvas from "./FabricCanvas";
import TextModal from "./Modal/TextModal";

function Designer({canvas, setCanvas}) {
  const [previewUrl, setPreviewUrl] = useState(null);
  // const [show, setShow] = useState(false);
  const tshirtDivRef = useRef(null);

  useEffect(() => {
    const initCanvas = new fabric.Canvas("fabric-canvas");
    setCanvas(initCanvas);
    return () => {
      // setCanvas(null);
      initCanvas.dispose();
    };
  }, []);

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

  const generatePreview = () => {
    canvas.discardActiveObject();
    canvas.renderAll();
    console.log(canvas.toJSON());
    if (tshirtDivRef.current) {
      html2canvas(tshirtDivRef.current).then((canvas) => {
        const dataUrl = canvas.toDataURL("image/png");
        setPreviewUrl(dataUrl);
      });
    }
  };

  return (
    <>
      <div id="backgroundpicture">
        <div
          name="Front"
          ref={tshirtDivRef}
          style={{ position: "relative", backgroundColor: "transparent" }}
        >
          <img
            id=""
            className="object-cover w-full"
            src={FrontImage}
            alt="FrontImage"
          />
          <FabricCanvas />
        </div>
      </div>
    </>
  );
}

export default Designer;
