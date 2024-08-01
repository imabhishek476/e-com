import { useEffect, useRef, useState } from "react";
import Layout from "../../Layout";
import Designer from "../../components/FabricJs/Designer";
import Preview from "../../components/FabricJs/Preview";
import Snackbar from "../../components/Warning/Snackbar";
import FrontImage from "../../assets/custom/FrontTshirt.png";
import BackImage from "../../assets/custom/backView.png";
import { IoCloudUploadOutline, IoImage, IoText } from "react-icons/io5";
import { IoMdImages } from "react-icons/io";
import TextModal from "../../components/FabricJs/Modal/TextModal";
import UploadModal from "../../components/FabricJs/Modal/UploadModal";
import GalleryModal from "../../components/FabricJs/Modal/GalleryModal";
import html2canvas from "html2canvas";
import useCustomStore from "../../app/customStore";
import PreviewTab from "../../components/FabricJs/PreviewTab";

const size = ["S", "M", "L", "XL", "XXL"];
const color = [
  "#FF0000",
  "black",
  "#0062CC",
  "#F000D8",
  "green",
  "#EBFF00"
  // "#00FF38",
  // "#4F2323",
  // "#3C3C3C",
  // "#CC0CD0",
  // "#FF8A00",
  // "#31BD00"
];

function index() {
  const tshirtDivRef = useRef(null);
  const [activeCanvas, setActiveCanvas] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [canvas, setCanvas] = useState(null); //fabricFront
  const [canvasBack, setCanvasBack] = useState(null); //fabricBack
  const [modal, setModal] = useState("");
  const [pageStack, setPageStack] = useState([]);
  const { setPreview } = useCustomStore();
  const checkPageStack = (num) => {
    setModal("");
    if (pageStack.includes(num)) {
      setSelected({ ...selected, page: num });
      setPageStack((p) => {
        let newStack = [...p];
        while (newStack.length) {
          const popValue = newStack.pop();
          if (popValue === num) {
            return [...p, num];
          }
        }
        return newStack;
      });
    } else {
      // Handle the case where num is not in the stack
      console.log(pageStack);
    }
  };
  const [selected, setSelected] = useState({
    color: "",
    size: "",
    page: 1
  });
  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {

  //     alert("User attempted to reload the site.");
  //     event.preventDefault(); // Standard way to prevent the default action
  //     event.returnValue = ''; // For older browsers
  //   };

  //   window.addEventListener('beforeunload', handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, []);

  const generatePreview = () => {
    canvas.discardActiveObject();
    canvas.renderAll();
    canvasBack.discardActiveObject();
    canvasBack.renderAll();
    // console.log(canvas.toJSON());
    const dataUrlFront = canvas.toDataURL("image/png");
    const dataUrlBack = canvasBack.toDataURL("image/png");
    setPreview({ front: dataUrlFront, back: dataUrlBack });
    // if (tshirtDivRef.current) {
    //   html2canvas(tshirtDivRef.current).then((canvas) => {
    //     const dataUrl = canvas.toDataURL("image/png");
    //     setPreviewUrl(dataUrl);
    //   });
    // }
  };

  useEffect(() => {
    const handleSelection = (event) => {
      const activeObject = event;
      console.log(activeObject);
      if (
        activeObject?.selected?.length < 2 &&
        activeObject.selected[0].type === "i-text"
      ) {
        setActiveCanvas(true);
        setModal("text");
        setTextValue(activeObject.selected[0].text);
      } else {
        setActiveCanvas(false);
        setModal("");
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

  useEffect(() => {
    const handleSelection = (event) => {
      const activeObject = event;
      console.log(activeObject);
      if (
        activeObject?.selected?.length < 2 &&
        activeObject.selected[0].type === "i-text"
      ) {
        setActiveCanvas(true);
        setModal("text");
        setTextValue(activeObject.selected[0].text);
      } else {
        setActiveCanvas(false);
        setModal("");
      }
    };

    document.addEventListener(
      "keydown",
      (e) => {
        return e.code == "Delete"
          ? canvasBack.remove(canvas.getActiveObject())
          : false;
      },
      false
    );

    canvasBack?.on("selection:created", handleSelection);
    canvasBack?.on("selection:cleared", handleSelection);
    canvasBack?.on("selection:updated", handleSelection);
    return () => {
      canvasBack?.off("selection:created", handleSelection);
      canvasBack?.off("selection:updated", handleSelection);
    };
  }, [canvasBack]);

  return (
    <Layout page={"custom"}>
      <div className="flex flex-col items-center w-full h-screen overflow-y-hidden mt-[64px]">
        <div className="w-[30%] fixed">
          <ul className="flex justify-between">
            <li className="text-center text-xs text-pink-600">
              <div className="border-2 rounded-full mx-[3rem] border-pink-600">
                <button
                  disabled={!pageStack.includes(1)}
                  onClick={() => checkPageStack(1)}
                  className={`${
                    (selected.page === 1 || pageStack.includes(1)) &&
                    "bg-pink-600"
                  } rounded-full px-[0.6rem] py-1 m-[1px]`}
                >
                  1
                </button>
              </div>
              <p>Pick Color & Size</p>
            </li>
            <li className="text-center text-xs text-pink-600">
              <div className="border-2 rounded-full mx-[3rem] border-pink-600">
                <button
                  disabled={!pageStack.includes(2)}
                  onClick={() => checkPageStack(2)}
                  className={`${
                    (selected.page === 2 || pageStack.includes(2)) &&
                    "bg-pink-600"
                  } rounded-full px-[0.6rem] py-1 m-[1px]`}
                >
                  2
                </button>
              </div>
              <p>Final Design</p>
            </li>
            <li className="text-center text-xs text-pink-600">
              <div className="border-2 rounded-full mx-[3rem] border-pink-600">
                <button
                  disabled={!pageStack.includes(3)}
                  onClick={() => checkPageStack(3)}
                  className={`${
                    (selected.page === 3 || pageStack.includes(3)) &&
                    "bg-pink-600"
                  } rounded-full px-[0.6rem] py-1 m-[1px]`}
                >
                  3
                </button>
              </div>
              <p>Preview</p>
            </li>
          </ul>
          <div className="border-b-3 my-1"></div>
          {selected.page === 1 && (
            <div className="container h-screen">
              {false && (
                <Snackbar
                  duration={3000}
                  message={"Please Select Size and Color"}
                  type={"success"}
                  onClose={() => ""}
                />
              )}
              <div className="my-2">
                <h4 className="font-semibold">Select Color</h4>
              </div>
              <div className="grid grid-cols-3 gap-8">
                {color &&
                  color.map((item) => {
                    return (
                      <div key={item} className="m-2 text-center">
                        <button
                          style={{
                            backgroundColor:
                              selected.color === item ? item : item,
                            border: selected.color === item && `1px solid black`
                          }}
                          onClick={() =>
                            setSelected({ ...selected, color: item })
                          }
                          className={`p-[30px] py-[30px] rounded-full`}
                        ></button>
                      </div>
                    );
                  })}
              </div>
              <div className="my-2">
                <h4 className="font-semibold">Select Size</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {size &&
                  size.map((item) => {
                    return (
                      <>
                        <div className="flex flex-col items-center m-2 w-[45px] text-[10px]">
                          <button
                            key={item}
                            onClick={() =>
                              setSelected({ ...selected, size: item })
                            }
                            className={`w-full p-[15px] border-1 border-black rounded-md`}
                            style={{
                              backgroundColor:
                                selected.size === item && `yellow`
                            }}
                          >
                            {item}
                          </button>
                          <p className=" text-red-500">5 Left</p>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          )}

          {/* fabric  */}
          {selected.page === 2 && (
            <div className="container h-screen relative">
              <Designer
                modal={modal}
                setCanvas={setCanvas}
                canvas={canvas}
                tshirtDivRef={tshirtDivRef}
                canvasBack={canvasBack}
                setCanvasBack={setCanvasBack}
                FrontImage={FrontImage}
                BackImage={BackImage}
              />
            </div>
          )}
          {selected.page === 3 && (
            <div className="container h-screen relative">
              <Preview FrontImage={FrontImage} BackImage={BackImage} />
            </div>
          )}
          <div className="flex flex-col w-full sticky bottom-0 z-0">
            {selected.page === 2 && (
              <div className="flex text-xs">
                <button
                  onClick={() => setModal("text")}
                  className="px-4 flex flex-col items-center border border-black bg-gray-200 w-2/4 p-2"
                >
                  <div>
                    <IoText />
                  </div>
                  <div>Add text</div>
                </button>
                <button
                  onClick={() => setModal("upload")}
                  className="px-4 flex flex-col items-center border border-black bg-gray-200 w-2/4 p-2"
                >
                  <div>
                    <IoImage />
                  </div>
                  <div>Upload</div>
                </button>
                <button
                  disabled
                  onClick={() => setModal("gallery")}
                  className="px-4 flex flex-col items-center border border-black bg-gray-200 w-2/4 p-2"
                >
                  <div>
                    <IoCloudUploadOutline />
                  </div>
                  <div>Gallery</div>
                </button>
              </div>
            )}
            {selected.page === 3 && <PreviewTab />}
            <div className="flex 2-full">
              <button
                disabled={
                  selected.page === 3 || !selected.color || !selected.size
                }
                onClick={() => {
                  setPageStack((p) =>
                    p && p.includes(selected.page)
                      ? [...p]
                      : [...p, selected.page]
                  );
                  selected.page === 1
                    ? localStorage.removeItem("fabric-store")
                    : "";
                  setSelected({ ...selected, page: selected.page + 1 });

                  selected.page === 2 && generatePreview();
                }}
                className="bg-[#050A44] py-[0.4rem] w-full text-white"
              >
                { selected.page === 1 ? 'Next': (selected.page === 2 ? 'Save & Next' : 'Add To Cart')}
              </button>
            </div>
            <div className="">
              {modal === "text" && (
                <TextModal
                  canvas={canvas}
                  canvasBack={canvasBack}
                  setModal={setModal}
                  activeCanvas={activeCanvas}
                  setActiveCanvas={setActiveCanvas}
                  textValue={textValue}
                  setTextValue={setTextValue}
                />
              )}
              {/* {modal==='text' && <TextModal/>} */}
              {modal === "upload" && (
                <UploadModal
                  canvas={canvas}
                  canvasBack={canvasBack}
                  setModal={setModal}
                />
              )}
              {modal === "gallery" && (
                <GalleryModal canvas={canvas} setModal={setModal} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default index;
