import { useNavigate } from "react-router-dom";

function ProductCard({ id, title, description, img, price , urlSlug}) {
  const navigate = useNavigate()

  return (
    <>
      <div onClick={()=>navigate(`/product-info/${urlSlug}`)} className="bg-white rounded-xl shadow-md border w-[200px] cursor-pointer">
        <div
          className="p-4 flex items-center justify-center"
          style={{ filter: "drop-shadow(0px 12px 8px gray)" }}
        >
          <img
            className="h-[120px] mix-blend-multiply transition-transform duration-300 ease-in-out hover:scale-125"
            src={img}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-start m-3 p-1 space-y-2">
          <span className="font-semibold text-xs">{(title).slice(0,30)}...</span>
          <span className="font-semibold text-xs">Price: ₹{price}</span>
          <div className="flex justify-between items-center w-full mr-3 my-2 font-semibold text-xs">
            <div>⭐ 4.8</div>
            <button
              // onClick={}
              className="px-3 py-1 border-2 border-black rounded-2xl"
            >
              Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
