import { useEffect, useState } from "react";
import Layout from "../../Layout";
import { useParams } from "react-router-dom";
import { getProductByUrl } from "../../api/product";
import ViewProductCorousel from "./ViewProductCorousel";
import { IoIosStar } from "react-icons/io";
import { FaMinus, FaPlus, FaRegStar } from "react-icons/fa";
import { Accordion, AccordionItem, Button, Input } from "@nextui-org/react";
import { TiDocumentText } from "react-icons/ti";
import { RiExchangeFill } from "react-icons/ri";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdCurrencyExchange } from "react-icons/md";
import useCartStore from "../../app/useCartStore";
import { handleCheckPincode } from "../../api/pincode";

function ViewProduct() {
  const { addItem, updateCart, isProductInCart, clearCart, getProductDetails } =
    useCartStore();
  //pincode state
  const [pincode, setPincode] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //pincode state

  const [productData, setProductData] = useState();
  const [Color, setColor] = useState([]);
  const [Size, setSize] = useState([]);
  const [selectedColor, setSelectedColor] = useState({
    color: "",
    images: []
  });
  const [selected, setSelected] = useState({
    size: ""
  });
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger:
      "px-2 py-0 data-[hover=true]:bg-default-100 rounded-sm h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2"
  };
  const defaultContent = (
    <p className="ml-7 container">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  );

  const GetProductBySlug = async () => {
    const data = await getProductByUrl(params.url);
    // console.log(data);
    setProductData(data);
    setColor(() => {
      let arr = [];
      arr = data?.variants.filter((i) => i.title === "Color");
      // console.log(arr);
      setSelectedColor({
        ...selectedColor,
        color: getProductDetails(data._id).color || arr[0]?.values[0],
        images: arr[0]?.images
      });
      return arr;
    });
    setSize(() => {
      let arr = [];
      arr = data?.variants.filter((i) => i.title === "Size");
      // console.log(arr);
      if(getProductDetails(data._id).quantity){
        setQuantity(getProductDetails(data._id).quantity)
      }
      setSelected({
        ...selected,
        size: getProductDetails(data._id).size || arr[0]?.values[0]
      });
      return arr;
    });
  };

  const handleAddToCart = () => {
    addItem(productData?._id, quantity, productData?.discountPrice, {
      color: selectedColor.color,
      size: selected.size
    });
  };
  const handleUpdateCart = () => {
    updateCart(productData?._id, {
      quantity: quantity,
      color: selectedColor.color,
      size: selected.size
    });
  };

  useEffect(() => {
    GetProductBySlug();
  }, []);
  // useEffect(() => {
  //   handleUpdateCart();
  // }, [quantity, selected, selectedColor]);
  // useEffect(()=>{
  //   clearCart()
  // },[])

  return (
    <Layout page={"view"}>
      <div className="block md:flex sm gap-6 h-screen container">
        {/* Left Side  */}
        <div className="w-full overflow-y-auto scrollbar-hide">
          <ViewProductCorousel
            images={selectedColor.images || productData?.productImage}
          />
        </div>
        {/* Right Side  */}
        <div className="overflow-y-auto scrollbar-hide text-sm space-y-4">
          <div>
            <h1 className="font-semibold text-3xl">
              {productData?.productName}
            </h1>
          </div>
          <div className="flex gap-1">
            <div className="flex gap-1 text-yellow-400 text-lg">
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
              <span>
                <IoIosStar />
              </span>
            </div>
            <span className="">(1000+ Review)</span>
          </div>
          <div className="">
            <h4 className="">{productData?.shortDescription}</h4>
          </div>
          <div className="flex items-center gap-2">
            <h4 className="text-lg font-semibold">
              Price : ₹{productData?.discountPrice}
            </h4>
            <span>
              <i className="line-through">{productData?.price} </i>(
              {Math.round(
                productData?.price && productData?.discountPrice
                  ? ((productData?.price - productData?.discountPrice) /
                      productData?.price) *
                      100
                  : 0
              )}
              % OFF)
            </span>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Color:</h4>
            <div className="space-x-4 text-transparent">
              {Color &&
                Color.map((i, index) => {
                  return (
                    <button
                      key={i?._id}
                      className="p-4 rounded-full"
                      style={{
                        backgroundColor: i?.values[0],
                        border:
                          selectedColor.color === i?.values[0]
                            ? "2px solid black"
                            : "0.5px dashed black"
                      }}
                      onClick={() =>
                        setSelectedColor({
                          ...selectedColor,
                          color: i?.values[0],
                          images: i?.images
                        })
                      }
                    >
                      ......
                    </button>
                  );
                })}
            </div>
          </div>
          <div className="">
            <h4 className="text-lg font-semibold">Select Size:</h4>
            <div className="flex justify-between">
              <div className="space-x-4 w-full">
                {Size &&
                  Size?.map((i, index) => {
                    return (
                      <button
                        onClick={() => {
                          setSelected({
                            ...selected,
                            size: i?.values[0]
                          });
                        }}
                        key={i?._id}
                        className="p-2 px-4 border-2 border-black rounded-full text-md"
                        style={{
                          border:
                            selected.size === i?.values[0]
                              ? "2px solid black"
                              : "0.5px dashed black"
                        }}
                      >
                        {i?.values[0]}
                      </button>
                    );
                  })}
              </div>
              <div className="flex gap-3 items-center rounded-xl bg-violet-200 p-1 text-xs text-black h-7">
                <button
                  disabled={quantity === 1}
                  onClick={() => setQuantity((p) => (p = p - 1))}
                  className="p-1 rounded-full bg-white w-full"
                >
                  <FaMinus />
                </button>
                <span>{quantity}</span>
                <button
                  disabled={quantity === 10}
                  onClick={() => setQuantity((p) => (p = p + 1))}
                  className="p-1 rounded-full bg-white w-full"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-4 border-b-2 border-black pb-4">
            {isProductInCart(productData?._id) ? (
              <Button
                radius="sm"
                className="w-full bg-transparent border-2 border-[#050A44]"
                onClick={handleUpdateCart}
              >
                Update to Cart
              </Button>
            ) : (
              <Button
                radius="sm"
                className="w-full bg-transparent border-2 border-[#050A44]"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            )}
            <Button radius="sm" className="w-full bg-[#050A44] text-white">
              Buy Now
            </Button>
          </div>
          <div className="font-semibold space-y-3">
            <h4 className="text-xl font-semibold">
              Check city for delivery details
            </h4>
            <span>
              Delivery all across <span className="text-pink-600">India</span>
            </span>
            <div>
              <Input
                classNames={{
                  input: "border-none focus:ring-0",
                  base: "border-2 rounded-lg border-[#050A44]"
                }}
                placeholder="Enter pincode"
                type="number"
                minLength={6}
                maxLength={6}
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                endContent={
                  <Button
                    auto
                    color="pink"
                    onClick={async () => {
                      setLoading(true);
                      setResult(null);
                      setError(null);
                      const data = await handleCheckPincode(pincode);
                      if (data.error) {
                        setError(data?.result);
                        setLoading(false);
                      } else {
                        setResult(data?.result);
                        setLoading(false);
                      }
                      setLoading(false);
                    }}
                    disabled={loading}
                  >
                    {loading ? "Checking..." : "CHECK"}
                  </Button>
                }
              />
              {result && (
                <div className="mt-4 text-black">
                  <p>{result}</p>
                </div>
              )}
              {error && (
                <div className="mt-4 text-red-600">
                  <p>{error}</p>
                </div>
              )}
            </div>
            <div className="container">
              <Accordion
                showDivider={false}
                className="p-2 flex flex-col gap-1 w-full"
                // variant="shadow"
                itemClasses={itemClasses}
              >
                <AccordionItem
                  key="1"
                  aria-label="Offers"
                  startContent={<FaRegStar />}
                  subtitle={"Save extra with 1 offer"}
                  title="Offers"
                  indicator={({ isOpen }) =>
                    isOpen ? <FaMinus className="rotate-90" /> : <FaPlus />
                  }
                >
                  <div className="ml-7">
                    <p>
                      Get Rs.100 instant discount on your First Purchase above
                      Rs.599. Coupon code - <span id="NEW100">NEW100</span>
                    </p>
                    <button
                      onClick={(event) => {
                        const text = document.getElementById("NEW100");
                        navigator.clipboard.writeText(text.innerText);
                        const button = event.target;
                        button.textContent = "Copied!";
                        setTimeout(() => {
                          button.textContent = "Tap to Copy";
                        }, 2000);
                      }}
                    >
                      Tap to Copy
                    </button>
                  </div>
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Product Description"
                  startContent={<TiDocumentText />}
                  subtitle="Manufacture, Care and Fit"
                  title="Product Description"
                  indicator={({ isOpen }) =>
                    isOpen ? <FaMinus className="rotate-90" /> : <FaPlus />
                  }
                >
                  <div
                    className="ml-7 space-y-3 font-semibold container"
                    dangerouslySetInnerHTML={{
                      __html: productData?.description
                    }}
                  />
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="15 DAYS RETURNS"
                  startContent={<RiExchangeFill />}
                  subtitle="Know about return & exchange policy"
                  title="15 DAYS RETURNS"
                  indicator={({ isOpen }) =>
                    isOpen ? <FaMinus className="rotate-90" /> : <FaPlus />
                  }
                >
                  {defaultContent}
                </AccordionItem>
              </Accordion>
            </div>
            <div className="container flex items-center gap-4">
              <div className="flex flex-col justify-center items-center w-full">
                <span className="text-6xl">
                  <BsFillCartCheckFill />
                </span>
                <span className="text-center">
                  100% SECURE PAYMENTS METHODS
                </span>
              </div>
              <div className="flex flex-col justify-center items-center w-full">
                <span className="text-6xl">
                  <MdCurrencyExchange />
                </span>
                <span className="text-center">
                  EASY RETURN & INSTANT REFUND
                </span>
              </div>
            </div>
            <div>
              <div className="text-xs font-inter flex">
                <span>🔰87% &nbsp;</span>
                <p className="font-normal">
                  of verified buyers recommend this product
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ViewProduct;
