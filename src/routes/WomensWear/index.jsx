import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Navbar/Sidebar";
import Footer from "../../components/Footer";
import Carousel from "../../components/Everyone/Carousel";
import Category from "../../components/Products/Category";
import NewArrival from "../../components/Products/NewArrival";
import Banner from "../../components/Banner";
import WomenProductCard from "../../components/Products/NewArrival/WomenProductCard";
import a1 from "../../assets/a1.png";
import b2 from "../../assets/b2.png";
import b3 from "../../assets/b3.png";
import Women from "../../assets/woman-with-shopping.png";
import BlackShortSleeveDress from "../../assets/images/cart/black-short-sleeve-dress.png"
import JeansJacket from "../../assets/images/cart/jeans-jacket.png"
import RayBan from "../../assets/images/cart/ray-ban.png"
import BlackCoat from "../../assets/images/cart/black-coat.png"
import Sweater from "../../assets/images/cart/pink-sweter.png"

const slides = [a1, b3, b2];

function index() {
  return (
    <>
      <div className="grid grid-cols-12 bg-white">
        <div className="col-span-3 fixed h-screen bg-white border-black shadow-2xl w-[16.6%] hidden lg:block md:hidden z-100">
          <Sidebar />
        </div>
        <div className="flex flex-col bg-gray-50 col-start-1 md:col-start-1 lg:col-start-3 col-end-13 md:col-end-13 lg:col-end-13 sticky">
          <Navbar />
          <div className="container m-4 ml-0">
            <Carousel autoSlide={true}>
              {[
                ...slides.map((item) => (
                  <img
                    className="cursor-pointer px-1 rounded-lg"
                    key={item}
                    src={item}
                  />
                ))
              ]}
            </Carousel>
          </div>
          {/* <Category message={"Popular Collections"}/> */}
          <WomenCategory/>
          <Banner page={"Women"} />
          <NewArrival message={"Popular Collections"} />
          <NewArrival />
          <WomenWithShopingBags />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default index;

function WomenWithShopingBags() {
  return (
    <div className="flex container my-5">
      <img className="w-3/6" src={Women} alt="" />
      <div className="flex flex-col gap-10 justify-around">
        <div className="flex flex-col gap-3 items-center m-4 container">
          <span className="text-4xl  text-gray-500 text-center">UP TO 50% OFF</span>
          <span className="text-3xl text-center text-secondary font-semibold">
            Unleash Your Style Potential with Our Spectacular Clothing Sale
          </span>
          <span className="text-lg text-center text-gray-500 font-semibold">
            Feel free to customize these titles to fit the tone and theme of
            your clothing sale and to convey the excitement of the discounts
            being offered.
          </span>
        </div>
        <div className="text-center text-2xl m-4">
          <button className="bg-secondary w-full sm:py-3 py-2 font-semibold hover:bg-blue-900 text-white rounded-lg">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

function WomenCategory() {
  const ProductCategory =[
    {
      id: 1,
      type: "Women's Top",
      price: "$199",
      image: BlackShortSleeveDress,
      item: "20 items"
    },
    {
      id: 2,
      type: "Women's Glasses",
      price: "$90",
      image: RayBan,
      item: "20 items"
    },
    {
      id: 3,
      type: "Women's Jacket",
      price: "$250",
      image: BlackCoat,
      item: "20 items"
    },
    {
      id: 4,
      type: "Women's Sweater",
      price: "$90",
      image: Sweater,
      item: "20 items"
    },
    {
      id: 5,
      type: "Women's Denim",
      price: "$250",
      image: JeansJacket,
      item: "20 items"
    },
  ]
  return (
    <div className=" text-black">
      <div className="m-4">
        <span className="text-3xl text-[#050A44] font-semibold">Popular Collections</span>
          <div className="flex justify-around flex-nowrap gap-1 my-4">
            {
              ProductCategory && ProductCategory?.map((item)=>(
                  <WomenProductCard key={item.id} item={item.item} img={item.image} price={item.price} category={item.type}/>
              ))
            }
          </div>
        </div>
    </div>
  )
}