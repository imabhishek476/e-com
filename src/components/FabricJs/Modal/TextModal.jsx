import { IoText } from "react-icons/io5";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { RxCross2, RxText } from "react-icons/rx";
import * as fabric from "fabric";
import { useEffect, useState } from "react";

function TextModal({ canvas , setModal}) {
  const [showTab, setShowTab] = useState("addText");
  const [currentFontFamily, setCurrentFontFamily] = useState("Arial");
  const [currentTextColor, setCurrentTextColor] = useState("black");
  const [activeCanvas, setActiveCanvas] = useState(false);
  const [textValue, setTextValue] = useState("");

  const textColor = [
    "black",
    "red",
    "green",
    "white",
    "orange",
    "yellow",
    "blue",
    "cyan",
    "violet"
  ];
  const fontFamily = [
    "Arial",
    "Montserrat",
    "Times",
    "Azerat",
    "Helvetica",
    "serif",
    "Verdana",
    "monospace"
  ];
  //   const textColor = []

  const addText = () => {
    const text = textValue;
    const activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "i-text") {
      activeObject.set({text});
    }
    if (text) {
      const newText = new fabric.IText(text, {
        left: 50,
        top: 100,
        fill: "black",
        fontFamily: "Arial"
      });
      canvas.add(newText);
      setTextValue("");
    }
  };

  const handleFontChange = (i) => {
    const fontFamily = i;
    setCurrentFontFamily(i);
    const activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "i-text") {
      activeObject.set({ fontFamily });
      canvas.renderAll();
    }
  };
  const changeTextColor = (tc) => {
    const newColor = tc;
    setCurrentTextColor(tc)
    const activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === 'i-text') {
      activeObject.set({ fill: newColor });
      canvas.renderAll();
    }
  };

  const closeModal=()=>{
    setModal('')
    canvas.discardActiveObject();
    canvas.requestRenderAll();
  }

  useEffect(() => {
    const handleSelection = (event) => {
      const activeObject = event;
      console.log(activeObject)
      if (
        activeObject?.selected?.length < 2 &&
        activeObject.selected[0].type === "i-text"
      ) {
        setActiveCanvas(true);
        setTextValue(activeObject.selected[0].text)
      } else {
        setActiveCanvas(false);
        // setModal('')
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
    <div
      id="myModal"
      className="fixed bottom-0 bg-white shadow-lg p-4 z-50  w-[24em]"
    >
      <button onClick={closeModal} className="absolute -top-10 right-0 bg-white p-4">
        <RxCross2 />
      </button>
      {showTab === "addText" && (
        <div className="my-1">
          <div className="flex justify-between items-center text-sm">
            <p className="">Tap to enter text</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="w-full">
              <input
                id="fabricTextBox"
                type="text"
                maxLength="60"
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                className="w-full mt-1 p-2 border rounded focus:border-none"
              />
              <label className="text-[10px]" htmlFor="fabricTextBox">
                Max. 60 Characters
              </label>
            </div>
            <button
              disabled={!textValue}
              onClick={addText}
              className="confirm mb-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              ✔
            </button>
          </div>
        </div>
      )}
      {showTab === "fontFamily" && (
        <div className="my-1 bg-black text-white">
          <div className="flex overflow-x-scroll scrollbar-hidden">
            <div className="flex flex-nowrap gap-2">
              {fontFamily &&
                fontFamily.map((i) => {
                  return (
                    <button
                      onClick={() => handleFontChange(i)}
                      style={{
                        backgroundColor: currentFontFamily === i && "green"
                      }}
                      className="text-center text-[11px]"
                      key={i}
                    >
                      <h4 className=" font-semibold" style={{ fontFamily: i }}>
                        Abc
                      </h4>
                      <span>{i}</span>
                    </button>
                  );
                })}
            </div>
          </div>
        </div>
      )}
      {showTab === "color" && (
        <div className="my-1">
          {/* <input type="color" name="" id="" /> */}
          <div className="flex overflow-x-scroll scrollbar-hidden">
            <div className="flex flex-nowrap gap-2">
              {textColor &&
                textColor.map((tc) => {
                  return (
                    <button
                      key={tc}
                      onClick={()=>changeTextColor(tc)}
                      className="w-[30px] h-[30px] border rounded-full"
                      style={{ backgroundColor: tc , border: currentTextColor=== tc && '2px solid black'}}
                    ></button>
                  );
                })}
            </div>
          </div>
        </div>
      )}

      <div className="flex text-xs">
        <button
          onClick={() => setShowTab("addText")}
          className="px-4 flex flex-col items-center border border-black bg-gray-200 w-2/4 p-2"
        >
          <div>
            <RxText />
          </div>
          <div>Add text</div>
        </button>
        <button
          onClick={() => setShowTab("fontFamily")}
          disabled={!activeCanvas}
          className="px-4 flex flex-col items-center border border-black disabled:bg-gray-600 bg-gray-200 w-2/4 p-2"
        >
          <div>
            <IoText />
          </div>
          <div>Font</div>
        </button>
        <button
          onClick={() => setShowTab("color")}
          disabled={!activeCanvas}
          className="px-4 flex flex-col items-center border disabled:bg-gray-600 border-black bg-gray-200 w-2/4 p-2"
        >
          <div>
            <RiCheckboxBlankCircleFill />
          </div>
          <div>Color</div>
        </button>
      </div>
    </div>
  );
}

export default TextModal;
