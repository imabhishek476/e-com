import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Navbar/Sidebar";
import Footer from "../../components/Footer";
import Carousel from "../../components/MensWear/Carousel";
import Category from "../../components/Products/Category";
import NewArrival from "../../components/Products/NewArrival";
import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.png";
import b3 from "../../assets/b3.png";

const slides = [b1, b2, b3];

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
            <Carousel autoSlide={true}>{[...slides.map((item) => <img className="cursor-pointer px-1" key={item} src={item}/>)]}</Carousel>
          </div>
          <Category />
          {/* {"Popular Collections"} */}
          <NewArrival />
          <NewArrival />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default index;
