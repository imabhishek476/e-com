import React from "react";
import Sidebar from "../../components/Navbar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import NewArrival from "../../components/Products/NewArrival";
import ProductCategory from "../../components/Products/Category";
import Popular from "../../components/Products/Popular/index";





function index() {
  return (
    <>
      <div className="grid grid-cols-12 bg-white">
        <div className="col-span-3 fixed h-screen bg-white border-black shadow-2xl w-[16.6%] hidden lg:block md:hidden z-100">
          <Sidebar />
        </div>
        <div className="flex flex-col bg-gray-50 col-start-1 md:col-start-1 lg:col-start-3 col-end-13 md:col-end-13 lg:col-end-13 sticky">
          <Navbar />
          <Banner page={"Women"} />
          <NewArrival message={"Our New Product"} />
          <ProductCategory/>
          <Popular />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default index;
