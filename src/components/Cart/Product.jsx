import { FaMinus, FaPlus } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import useCartStore from "../../app/useCartStore";
import { useState } from "react";
// import nearestColor from "nearest-color";

// const getColorName = (hex) => {
//   const color = nearestColor.from(hex);
//   return color ? color.name : false;
// };

function Product({ id, img, price, title, urlSlug, color, size, totalQuantity , setUpdate}) {
  const [quantity, setQuantity] = useState(totalQuantity);
  const {updateCart, removeItem} = useCartStore()

  const handleUpdateCart =(p)=>{
     updateCart(id,{quantity: p})
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 md:px-6 p-3">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <a href={urlSlug ?`/product-info/${urlSlug}` : '/customize'} className="shrink-0 md:order-1">
          <img className="h-full w-28" src={img} alt="imac image" />
        </a>

        <label htmlFor="counter-input" className="sr-only">
          Choose quantity:
        </label>
        <div className="flex items-center justify-between md:order-3">
          <div className="md:w-32 md:pr-10">
            <div className="flex items-center shrink-0 md:order-1 p-1 rounded-xl drop-shadow-md shadow-black">
              <div className="flex gap-3 items-center rounded-xl bg-violet-200 p-1 text-xs text-black h-7">
                <button
                  disabled={quantity === 1}
                  onClick={() => {
                    setQuantity((p) => {
                      const nQ = p - 1
                      handleUpdateCart(nQ)
                      return nQ
                    });
                    setUpdate((p)=>!p)
                    // window.location.reload()
                  }}
                  className="p-1 rounded-full bg-white w-full"
                >
                  <FaMinus />
                </button>
                <span>{quantity}</span>
                <button
                  disabled={quantity === 10}
                  onClick={() => {
                    setQuantity((p) => {
                      const nQ = p + 1
                      handleUpdateCart(nQ)
                      return nQ
                    });
                    setUpdate((p)=>!p)
                    // window.location.reload()
                  }}
                  className="p-1 rounded-full bg-white w-full"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>

          <div className="shrink-0 md:order-2 md:w-32">
            <p className="text-base font-bold text-gray-900">
              ₹{totalQuantity * price}
            </p>
          </div>
          <div className="shrink-0 md:order-3">
            <p
              onClick={() => {
                removeItem(id);
                window.location.reload()
              }}
              className="text-base font-bold text-gray-900 cursor-pointer"
            >
              <AiFillDelete />
            </p>
          </div>
        </div>

        <div className="flex-1 space-y-4 md:order-2 py-4 md:py-6">
          <a
            href="#"
            className="text-base font-medium text-gray-900 dark:text-white"
          >
            {title}
          </a>
          <div className="flex flex-col md:order-5  md:w-32">
            <div className="flex flex-col font-semibold">
              {color && (
                <div>
                  color: <span className="font-light">{color}</span>
                </div>
              )}
              {size && (
                <div>
                  size: <span className="font-normal">{size}</span>
                </div>
              )}
            </div>
            <div className="">
              <p className="font-bold text-gray-900 dark:text-white">
                Price: ₹{price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
