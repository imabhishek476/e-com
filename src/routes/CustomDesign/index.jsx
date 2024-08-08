import { useEffect, useRef, useState } from "react";
import Layout from "../../Layout";
import Designer from "../../components/FabricJs/Designer";
import Preview from "../../components/FabricJs/Preview";
import Snackbar from "../../components/Warning/Snackbar";
import { IoCloudUploadOutline, IoImage, IoText } from "react-icons/io5";
import TextModal from "../../components/FabricJs/Modal/TextModal";
import UploadModal from "../../components/FabricJs/Modal/UploadModal";
import GalleryModal from "../../components/FabricJs/Modal/GalleryModal";
import DomToImage from "dom-to-image";
import useCustomStore from "../../app/customStore";
import PreviewTab from "../../components/FabricJs/PreviewTab";
import { useNavigate, useParams } from "react-router-dom";
import { getCustomProductById } from "../../api/product";
import useCartStore from "../../app/useCartStore";

function Index() {
  const params= useParams()
  const navigation= useNavigate()
  const [size,setSize] = useState([]);
  const [color,setColor] = useState([]);
  const [discountPrice,setdiscountPrice] = useState();
  const [FrontImage,setFrontImage] = useState()
  const [BackImage,setBackImage] = useState() 
  ///from backend
  //
  const tshirtDivRef = useRef(null);
  const [activeCanvas, setActiveCanvas] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [canvas, setCanvas] = useState(null); //fabricFront
  const [canvasBack, setCanvasBack] = useState(null); //fabricBack
  const [modal, setModal] = useState("");
  const [pageStack, setPageStack] = useState([]);
  const { setPreview , frontPreview, backPreview} = useCustomStore();
  const {addItem} = useCartStore()
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

  const handleAddToCart = async() =>{
      try {
        const node = document.getElementById('frontPreviewImg');
        const dataUrl = await DomToImage.toPng(node);
        // console.log(dataUrl)
        // let obj = [
        //   {showCaseImg: dataUrl},
        //   {
        //     price: discountPrice
        //   },
        //   { id: params.pid },
        //   { color: selected.color },
        //   { size: selected.size },
        //   {frontDesign: frontPreview},
        //   {backDesign:backPreview},
        // ];
        addItem(params.pid, 1, discountPrice, {
          color: selected.color,
          size: selected.size,
          frontDesign: frontPreview,
          backDesign : backPreview,
          showCaseImg: dataUrl
        });
        navigation('/cart')
      } catch (error) {
        console.error("Error capturing the T-shirt design:", error);
      }
  }

  const generatePreview = () => {
    canvas.discardActiveObject();
    canvas.renderAll();
    canvasBack.discardActiveObject();
    canvasBack.renderAll();

    const dataUrlFront = canvas.toSVG();
    const dataUrlBack = canvasBack.toSVG();

    setPreview({
      frontPreview: dataUrlFront,
      backPreview: dataUrlBack
    });
  };

  useEffect(() => {
    const handleSelection = (event) => {
      const activeObject = event;
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

  useEffect(() => {
    async function fetchData() {
      const data = await getCustomProductById(params.pid);
      setdiscountPrice(data?.discountPrice)
      setSize(()=>{
         return data?.variants?.filter(variant => variant.title === "Size").map(variant => variant.value)
      })
      setColor(()=>{
         return data?.variants?.filter(variant => variant.title === "Color")
      })
    }
    fetchData();
  }, []);

  return (
    <Layout page={"custom"}>
      <div className="flex flex-col items-center w-full h-screen overflow-y-hidden ">
        <div className="w-[384px] fixed">
          <ul className="flex justify-between items-center w-[90%] mx-5">
            <li className="text-center text-xs text-pink-600">
              <div className="border-2 rounded-full border-pink-600">
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
              {/* <p>Pick Color & Size</p> */}
            </li>
            <li className="w-full mx-1">
              <hr style={{borderColor: (pageStack.includes(1)) && "#db2777"}} className="border-2 rounded-lg"/>
            </li>
            <li className="text-center text-xs text-pink-600">
              <div className="border-2 rounded-full border-pink-600">
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
              {/* <p>Final Design</p> */}
            </li>
            <li className="w-full mx-1">
              <hr style={{borderColor: (pageStack.includes(2)) && "#db2777"}} className="border-2 rounded-lg"/>
            </li>
            <li className="text-center text-xs text-pink-600">
              <div className="border-2 rounded-full border-pink-600">
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
              {/* <p>Preview</p> */}
            </li>
          </ul>
          <div className="flex justify-between w-full text-xs font-semibold text-pink-600">
            <div>Pick Color & size</div>
            <div className="pr-8">Design</div>
            <div className="pr-3">Preview</div>
          </div>
          <div className="border border-black mt-1 mr-3"></div>
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
                      <div key={item?._id} className="m-2 text-center">
                        <button
                          style={{
                            backgroundColor:
                              selected.color === item ? item.value : item?.value,
                            border: selected.color === item.value && `1px solid black`
                          }}
                          onClick={() =>{
                              setSelected({ ...selected, color: item.value })
                              setFrontImage(item?.frontImage)
                              setBackImage(item?.backImage)
                            }
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
                  size.map((item,index) => {
                    return (
                      <>
                        <div className="flex flex-col items-center m-2 w-[45px] text-[10px]">
                          <button
                            key={index}
                            onClick={() =>
                              setSelected({ ...selected, size: item })
                            }
                            className={`w-full p-[15px] border-1 border-black rounded-md`}
                            style={{
                              backgroundColor:
                                selected.size === item && `yellow`
                            }}
                          >
                            {item.toUpperCase()}
                          </button>
                          {/* <p className=" text-red-500">5 Left</p> */}
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
                canvasBack={canvasBack}
                setCanvasBack={setCanvasBack}
                FrontImage={FrontImage}
                BackImage={BackImage}
              />
            </div>
          )}
          {selected.page === 3 && (
            <div className="container h-screen relative">
              <Preview FrontImage={FrontImage} BackImage={BackImage}/>
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
                  !selected.color || !selected.size
                }
                onClick={() => {
                  selected.page === 3 && handleAddToCart();
                  if(selected.page !== 3){
                    setPageStack((p) =>
                      p && p.includes(selected.page)
                        ? [...p]
                        : [...p, selected.page]
                    );
                    selected.page === 1
                      ? localStorage.removeItem("fabric-store")
                      : "";
                    setSelected({ ...selected, page: selected.page + 1 });
                  }
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

export default Index;
