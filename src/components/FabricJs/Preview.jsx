import { useEffect, useState } from "react";
import { PiFlipHorizontalFill } from "react-icons/pi";
import red from '../../assets/custom/red.png'
import useCustomStore from "../../app/customStore";
import DomToImage from "dom-to-image";

function Preview({ FrontImage, BackImage }) {
  const [canvasSide, setCanvasSide] = useState("front");
  const {frontPreview, backPreview} = useCustomStore()
  console.log(frontPreview, backPreview)


  useEffect(()=>{

    const captureElementAsImageFront = (element) => {
        DomToImage.toPng(element, { quality: 1.0 })
          .then((dataUrl) => {
            // Create an image element
            const img = new Image();
            img.src = dataUrl;
            console.log(img)
            // document.body.appendChild(img);
          })
          .catch((error) => {
            console.error('Failed to capture element as image:', error);
          });
      };
    const captureElementAsImageBack = (element) => {
        DomToImage.toPng(element, { quality: 1.0 })
          .then((dataUrl) => {
            // Create an image element
            const img = new Image();
            img.src = dataUrl;
            console.log(img)
            // document.body.appendChild(img);
          })
          .catch((error) => {
            console.error('Failed to capture element as image:', error);
          });
      };
      
      // Usage: Pass the DOM element you want to capture
      const elementFront = document.getElementById('frontPreviewImg');
      const elementBack = document.getElementById('backPreviewImg');
      captureElementAsImageFront(elementFront);
      captureElementAsImageBack(elementBack);
  },[])

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
              <img
                src={frontPreview}
                width={160}
                height={280}
                className="object-cover"
              />
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
              <img
                src={backPreview}
                width={160}
                height={280}
                className="object-cover"
              />
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
