import React from "react";
import Jogger from "../../assets/images/cart/Jogger_Olive.png";
import { FaMinus, FaPlus } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { RemoveFromCart } from "../../utils/cart";

function Product({ id, img, price, title, description }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 md:px-6">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <a href="#" className="shrink-0 md:order-1">
          <img className="h-full w-28" src={img} alt="imac image" />
        </a>

        <label htmlFor="counter-input" className="sr-only">
          Choose quantity:
        </label>
        <div className="flex items-center justify-between md:order-3">
          <div className="md:w-32 md:pr-10">
            <div className="flex items-center shrink-0 md:order-1 bg-gray-200 p-1 rounded-xl drop-shadow-md shadow-black">
              <button
                type="button"
                id="decrement-button"
                data-input-counter-decrement="counter-input"
                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              >
                <FaMinus className="text-sm" />
              </button>
              <input
                type="text"
                id="counter-input"
                data-input-counter
                className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                placeholder=""
                value="1"
                required
              />
              <button
                type="button"
                id="increment-button"
                data-input-counter-increment="counter-input"
                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              >
                <FaPlus className="text-sm" />
              </button>
            </div>
          </div>

          <div className="shrink-0 md:order-2 md:w-32">
            <p className="text-base font-bold text-gray-900">$1000</p>
          </div>
          <div className="shrink-0 md:order-3">
            <p
              onClick={() => {
                RemoveFromCart(id);
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
          {/* <div>
                        <p>Men's Grey Mickey Smiling Graphic Printed Oversized Acid Wash T-shirt</p>
                      </div> */}

          <div className="flex flex-col md:order-5  md:w-32">
            <div className="">
              <p className="text-xs text-gray-900 dark:text-white">
                {description}
              </p>
            </div>
            <div className="">
              <p className="font-bold text-gray-900 dark:text-white">
                Price: {price}
              </p>
            </div>

            {/* <button
                          type="button"
                          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                        >
                          <svg
                            className="me-1.5 h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                            />
                          </svg>
                          Add to Favorites
                        </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
