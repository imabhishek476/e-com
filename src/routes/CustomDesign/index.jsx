import { useEffect, useState } from "react";
import Layout from "../../Layout";
import Designer from "../../components/FabricJs/Designer";
import { IoCloudUploadOutline, IoImage, IoText } from "react-icons/io5";
import { IoMdImages } from "react-icons/io";
import TextModal from "../../components/FabricJs/Modal/TextModal";
import UploadModal from "../../components/FabricJs/Modal/UploadModal";
import GalleryModal from "../../components/FabricJs/Modal/GalleryModal";

function index() {
  const [canvas, setCanvas] = useState(null);
  const [modal, setModal] = useState("");
  const [selected, setSelected] = useState({
    color: "",
    size: "",
    page: 2
  });
  const size = ["S", "M", "L", "XL", "XXL"];
  const color = [
    "#FF0000",
    "black",
    "#0062CC",
    "#F000D8",
    "#050A44",
    "#EBFF00"
    // "#00FF38",
    // "#4F2323",
    // "#3C3C3C",
    // "#CC0CD0",
    // "#FF8A00",
    // "#31BD00"
  ];

  useEffect(() => {
    const handleSelection = (event) => {
      const activeObject = event;
      console.log(activeObject)
      if (
        activeObject?.selected?.length < 2 &&
        activeObject.selected[0].type === "i-text"
      ) {
        // setActiveCanvas(true);
        // setTextValue(activeObject.selected[0].text)
        setModal('text')
        
      } else {
        // setActiveCanvas(false);
        setModal('')
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
    <Layout page={"custom"}>
      <div className="flex flex-col items-center w-full h-screen overflow-y-hidden mt-[64px]">
        <div className="w-[30%] fixed">
          <ul className="flex justify-between">
            <li className="text-center text-xs text-pink-600">
              <div className="border-2 rounded-full mx-[3rem] border-pink-600">
                <button
                  onClick={() => setSelected({ ...selected, page: 1 })}
                  className={`${
                    selected.page === 1 && "bg-pink-600"
                  } rounded-full px-3 py-1 m-[1px]`}
                >
                  1
                </button>
              </div>
              <p>Pick Color & Size</p>
            </li>
            <li className="text-center text-xs text-pink-600">
              <div className="border-2 rounded-full mx-[3rem] border-pink-600">
                <button
                  onClick={() => setSelected({ ...selected, page: 2 })}
                  className={`${
                    selected.page === 2 && "bg-pink-600"
                  } rounded-full px-3 py-1 m-[1px]`}
                >
                  2
                </button>
              </div>
              <p>Final Design</p>
            </li>
            <li className="text-center text-xs text-pink-600">
              <div className="border-2 rounded-full mx-[3rem] border-pink-600">
                <button
                  onClick={() => setSelected({ ...selected, page: 3 })}
                  className={`${
                    selected.page === 3 && "bg-pink-600"
                  } rounded-full px-3 py-1 m-[1px]`}
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
              <div className="my-2">
                <h4 className="font-semibold">Select Color</h4>
              </div>
              <div className="grid grid-cols-3 gap-8">
                {color &&
                  color.map((item) => {
                    return (
                      <div key={item} className="m-2">
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
              <Designer modal={modal} setCanvas={setCanvas} canvas={canvas}/>
            </div>
          )}
          {selected.page === 3 && (
            <div className="container h-screen">
              <div>Preview</div>
              <div>Image</div>
            </div>
          )}
          <div className="flex flex-col w-full sticky bottom-0 z-0">
            <div className="flex text-xs">
              <button onClick={()=>setModal('text')} className="px-4 flex flex-col items-center border border-black bg-gray-200 w-2/4 p-2">
                <div>
                  <IoText />
                </div>
                <div>Add text</div>
              </button>
              <button className="px-4 flex flex-col items-center border border-black bg-gray-200 w-2/4 p-2">
                <div>
                  <IoImage />
                </div>
                <div>Upload</div>
              </button>
              <button className="px-4 flex flex-col items-center border border-black bg-gray-200 w-2/4 p-2">
                <div>
                  <IoCloudUploadOutline />
                </div>
                <div>Preview</div>
              </button>
            </div>
            <div className="flex 2-full">
              <button className="border-1 border-[#050A44] py-[0.4rem] w-full">
                Save
              </button>
              <button
                disabled={selected.page === 3}
                onClick={() =>
                  setSelected({ ...selected, page: selected.page + 1 })
                }
                className="bg-[#050A44] py-[0.4rem] w-full text-white"
              >
                Next{" "}
              </button>
            </div>
            <div className="">
              {modal==='text' && <TextModal canvas={canvas} setModal={setModal}/>}
              {/* {modal==='text' && <TextModal/>} */}
              {false && <UploadModal canvas={canvas} setModal={setModal}/>}
              {false && <GalleryModal canvas={canvas} setModal={setModal}/>}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default index;
