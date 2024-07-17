import React from "react";
import Sidebar from "../../components/Navbar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import NewArrival from "../../components/Products/NewArrival";
import Gurrantee from "../../components/Service/Gurrantee";
import Footer from "../../components/Footer";
import B2 from "../../assets/images/MostPopular/Banner1.png";
import Banner2 from "../../assets/images/OnSale/Banner2.png";
import Banner3 from "../../assets/images/OnSale/Banner3.png";
import PopularBanner2 from "../../assets/images/MostPopular/Banner2.png";
import PopularBanner3 from "../../assets/images/MostPopular/Banner3.png";
import PopularBanner4 from "../../assets/images/MostPopular/Banner4.png";
import WomenProductCard from "../../components/Products/NewArrival/WomenProductCard";
import BlackShortSleeveDress from "../../assets/images/cart/black-short-sleeve-dress.png";
import JeansJacket from "../../assets/images/cart/jeans-jacket.png";
import RayBan from "../../assets/images/cart/ray-ban.png";
import BlackCoat from "../../assets/images/cart/black-coat.png";
import Sweater from "../../assets/images/cart/pink-sweter.png";

function index() {
  return (
    <>
      <div className="grid grid-cols-12 bg-white">
        <div className="col-span-3 fixed h-screen bg-white border-black shadow-2xl w-[16.6%] hidden lg:block md:hidden z-100">
          <Sidebar />
        </div>
        <div className="flex flex-col bg-gray-50 col-start-1 md:col-start-1 lg:col-start-3 col-end-13 md:col-end-13 lg:col-end-13 sticky">
          <Navbar />
          <PopularFunc />
          <ShopByCategory title={"Sale On by Categories"} />
          <NewArrival message={"On Sale"} />
          <Banner />
          <Gurrantee another={true} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default index;

export const PopularFunc = () => {
  return (
    <div className="container">
      <div className="rounded-xl overflow-hidden">
        <img className="object-contain" src={B2} alt="On Sale" />
      </div>
    </div>
  );
};

export const Banner = () => {
  const banner = [PopularBanner2, PopularBanner3, PopularBanner4];
  return (
    <div className="flex gap-2 m-4">
      {banner?.map((item) => {
        return (
          <div key={item} className="">
            <img src={item} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export function ShopByCategory({ title }) {
  const ProductCategory = [
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
    }
  ];
  return (
    <>
      <div className=" text-black">
        <div className="m-4">
          <span className="text-3xl text-[#050A44] font-semibold">{title}</span>
          <div className="flex justify-around flex-nowrap gap-1 my-4">
            {ProductCategory &&
              ProductCategory?.map((item) => (
                <WomenProductCard
                  key={item.id}
                  item={item.item}
                  img={item.image}
                  price={item.price}
                  category={item.type}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="">
        <div className="m-5">
          <div className="flex justify-between">
            <div className="w-[49%]">
              <img className="object-contain" src={Banner2} alt="" />
            </div>
            <div className="w-[49%]">
              <img className="object-contain" src={Banner3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}