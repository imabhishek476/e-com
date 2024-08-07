import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Product from "./Product";
import { cartArray } from "../../utils/cart";
import useCartStore from "../../app/useCartStore";
import { getProductByIds } from "../../api/product";

function index() {
  const [cartItems, setCartItems, cart] = useState(null);
  const { getAllItems, getProductDetails } = useCartStore();
  const [deliveryCharge] = useState(75);
  const [gst] = useState(getProductDetails().totalPrice * (18 / 100));
  const overallCartValue =
    getProductDetails().totalPrice +
    parseFloat(gst.toFixed(2)) +
    deliveryCharge;
  // console.log(getAllItems());

  const GetProductData = async (ids) => {
    const data = await getProductByIds(ids);
    console.log(data);
    setCartItems(data);
  };

  useEffect(() => {
    let productIds = getAllItems().map((i) => i.productId);
    if (productIds) {
      GetProductData(productIds);
    }
  }, []);

  return (
    <>
      <section className=" py-8 antialiased dark:bg-gray-900">
        <div className="bg-gray-700 flex items-center justify-center p-10 m-4 rounded-lg">
          <h1 className="text-6xl text-white font-mono">SHOPING CART</h1>
        </div>
        <div className="max-w-screen-xl px-4 2xl:px-0">
          {/* <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
              <div className="shrink-0 md:order-1 mx-3">Product</div>
              <div className="shrink-0 md:order-5">QUANTITY</div>
              <div className="shrink-0 md:order-3">TOTAL</div>
              <div className="shrink-0 md:order-4">TOTAL</div>
              <div className="shrink-0 md:order-4">TOTAL</div>
              <div className="shrink-0 md:order-4">TOTAL</div>
              <div className="shrink-0 md:order-4">TOTAL</div>
            </div>
          </div> */}
          <div className="">
            <div className="w-full flex-none lg:max-w-5xl xl:max-w-5xl">
              <div className="space-y-6">
                {/* Product */}
                {cartItems?.length > 0 ? (
                  cartItems.map((item, index) => {
                    return (
                      <Product
                        key={item?._id}
                        id={item?._id}
                        img={item.productImage}
                        price={item.discountPrice}
                        title={item.productName}
                        urlSlug={item?.urlSlug}
                        color={getProductDetails(item?._id).color}
                        size={getProductDetails(item?._id).size}
                        totalQuantity={getProductDetails(item?._id).quantity}
                      />
                    );
                  })
                ) : (
                  <div>No Items in cart</div>
                )}
              </div>
            </div>

            {cartItems?.length > 0 && (
              <div className="flex justify-end my-4 ml-1 gap-3">
                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="voucher"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        Do you have a Coupon Code?{" "}
                      </label>
                      <input
                        type="text"
                        id="voucher"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="Enter your coupon code"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Apply Code
                    </button>
                  </form>
                </div>
                <div className="flex ">
                  <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                    <p className="text-xl font-semibold text-gray-900 dark:text-white">
                      Order summary
                    </p>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <dl className="flex items-center justify-between gap-4">
                          <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                            Original price
                          </dt>
                          <dd className="text-base font-medium text-gray-900 dark:text-white">
                            {getProductDetails().totalPrice
                              ? "₹ " + getProductDetails().totalPrice
                              : 0}
                          </dd>
                        </dl>

                        {/* <dl className="flex items-center justify-between gap-4">
                          <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                            Savings
                          </dt>
                          <dd className="text-base font-medium text-green-600">
                            -$299.00
                          </dd>
                        </dl> */}

                        <dl className="flex items-center justify-between gap-4">
                          <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                            Delivery Charge
                          </dt>
                          <dd className="text-base font-medium text-gray-900 dark:text-white">
                            ₹ {deliveryCharge}
                          </dd>
                        </dl>

                        <dl className="flex items-center justify-between gap-4">
                          <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                            GST (18%)
                          </dt>
                          <dd className="text-base font-medium text-gray-900 dark:text-white">
                            ₹ {gst.toFixed(2)}
                          </dd>
                        </dl>
                      </div>

                      <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                        <dt className="text-base font-bold text-gray-900 dark:text-white">
                          Total
                        </dt>
                        <dd className="text-base font-bold text-gray-900 dark:text-white">
                          ₹ {overallCartValue}
                        </dd>
                      </dl>
                    </div>

                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Proceed to Checkout
                    </a>

                    <div className="flex items-center justify-center gap-2">
                      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        {" "}
                        or{" "}
                      </span>
                      <a
                        href="/"
                        title=""
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                      >
                        Continue Shopping
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 12H5m14 0-4 4m4-4-4-4"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
