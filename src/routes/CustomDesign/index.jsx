import { useState } from "react";
import Layout from "../../Layout";

function index() {
  const [selected, setSelected] = useState({
    color: "",
    size: "",
    page: 0
  });
  const color = [
    "#FF0000",
    "black",
    "#0062CC",
    "#F000D8",
    "#050A44",
    "#EBFF00",
    "#00FF38",
    "#4F2323",
    "#3C3C3C",
    "#CC0CD0",
    "#FF8A00",
    "#31BD00"
  ];

  const size = ["S", "M", "L", "XL", "XXL"];

  return (
    <Layout page={"custom"}>
      <div className="flex flex-col items-center w-full">
        <div className="w-[55%]">
          <ul className="flex justify-between">
            <li className="border-2 rounded-full p-[0.1rem] border-pink-600">
              <button onClick={()=>setSelected({...selected,page:1})} className="bg-pink-600 rounded-full p-3 py-1">1</button>
            </li>
            <li className="border-2 rounded-full p-[0.1rem] border-pink-600">
              <button onClick={()=>setSelected({...selected,page:2})} className="bg-pink-600 rounded-full p-3 py-1">2</button>
            </li>
            <li className="border-2 rounded-full p-[0.1rem] border-pink-600">
              <button onClick={()=>setSelected({...selected,page:3})} className="bg-pink-600 rounded-full p-3 py-1">3</button>
            </li>
          </ul>
          <div className="border-b-3 my-2"></div>
          {selected.page ===1  && (
            <div className="container">
              <div className="my-2">
                <h4 className="font-semibold">Select Color</h4>
              </div>
              <div className="grid grid-cols-6 gap-8">
                {color &&
                  color.map((item) => {
                    return (
                      <div key={item} className="m-2">
                        <button
                          style={{
                            backgroundColor: item,
                            border: selected.color === item && `1px solid black`
                          }}
                          onClick={() =>
                            setSelected({ ...selected, color: item })
                          }
                          className={`p-[35px] py-[35px] rounded-full`}
                        ></button>
                      </div>
                    );
                  })}
              </div>
              <div className="my-2">
                <h4 className="font-semibold">Select Size</h4>
              </div>
              <div className="grid grid-cols-4 gap-8">
                {size &&
                  size.map((item) => {
                    return (
                      <>
                        <div className="flex flex-col items-center">
                          <button
                            key={item}
                            onClick={() =>
                              setSelected({ ...selected, size: item })
                            }
                            className={`w-full p-[45px] border-2 rounded-lg`}
                            style={{
                              border:
                                selected.size === item && `2px solid black`
                            }}
                          >
                            {item}
                          </button>
                          <div>5 Left</div>
                        </div>
                      </>
                    );
                  })}
              </div>
              <div className="container my-4">
                <button className="bg-[#050A44] py-2 w-full text-white">
                  Next{" "}
                </button>
              </div>
            </div>
          )}
          {selected.page ===2 && (
            <>
              <div>Deign</div>
              <div>Front and Back</div>
            </>
          )}
          {selected.page ===3 && (
            <>
              <div>Preview</div>
              <div>Image</div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default index;
